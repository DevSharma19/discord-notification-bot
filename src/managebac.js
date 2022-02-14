import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { lessonRequestHeaders, mainRequestHeaders } from "./headers.js";

const getMain = async () => {
  // Regular expression to find online lessons and not tasks
  const onlineLessonRegexp = /\/student\/classes\/(\d+)\/online_lessons\/(\d+)/;

  const url = `https://lancers.managebac.com/student`;
  const response = await fetch(url, {
    headers: mainRequestHeaders,
  });

  const body = await response.text();
  const $ = cheerio.load(body);

  // If the response is 200 returns the status code
  if (response.status !== 200) return { status: response.status, url: url };

  // If the response isn't 200 returns lessons
  return {
    status: response.status,
    url: url,
    lessons: $("td.day li[event_id] span a")
      .map((i, e) => $(e).attr("href"))
      .get()
      .filter((link) => onlineLessonRegexp.test(link))
      .map(
        (link) =>
          "https://lancers.managebac.com" +
          link.replace("online_lessons", "events") +
          "/hint"
      ),
  };
};

const getOnlineLesson = async (url) => {
  const response = await fetch(url, {
    headers: lessonRequestHeaders,
  });

  const body = await response.text();
  const $ = cheerio.load(body);

  // If the response isn't 200 returns the status code
  if (response.status !== 200) return { status: response.status, url: url };

  // If the response is 200 returns the lesson data
  const teacher = $(".online-lesson-hint div:contains('Teacher:')")
    .contents()
    .filter(function () {
      return this.nodeType == 3;
    })[2]
    .data.trim();

  const date = $(".online-lesson-hint div:contains('Start Date & Time:')")
    .contents()
    .filter(function () {
      return this.nodeType == 3;
    })[1]
    .data.trim();

  const parsedDate = new Date(
    date.replace(/\w+,/g, "2022,").replace("at ", "")
  );

  return {
    status: response.status,
    url: url,
    title: $("h4.title a").text().trim(),
    link: $(".online-lesson-hint div:contains('Link:') a").text(),
    teacher: teacher,
    date: parsedDate,
  };
};

const getLessons = async () => {
  const mainResponse = await getMain();

  // If the main response isn't 200 returns the status code
  if (mainResponse.status !== 200) return mainResponse;

  // If the main response is 200 returns the lessons
  const lessons = await Promise.all(
    mainResponse.lessons.map(async (lesson) => {
      const lessonResponse = await getOnlineLesson(lesson);
      return lessonResponse;
    })
  );

  return lessons;
};

export default getLessons;
