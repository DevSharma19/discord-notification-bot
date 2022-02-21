require("dotenv").config();
const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });
let getLessons;

client.login(process.env.BOT_TOKEN);

let timeouts = [];

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}`);

  let managebac = await import("./managebac.js");
  getLessons = managebac.default;

  // add get lessons to lessons every 4 hours
  await setLessonTimers();
  setInterval(async () => await setLessonTimers(), 14400000);
});

const setLessonTimers = async () => {
//   lessons = await getLessons();
  const lessons = [
    {
      status: 200,
      url: "https://www.youtube.com/watch?v=q6EoRBvdVPQ",
      title: "guys it's time !!",
      link: "https://i.ibb.co/YjT4w4D/274312136-479442083560952-902356903680133127-n.jpg",
      date: new Date(2022, 1, 22, 2, 21, 0),
      teacher: "22/2/2022 at 2:22",
    },
    {
      status: 200,
      url: "https://www.youtube.com/watch?v=q6EoRBvdVPQ",
      title: "last chance mfs !!",
      link: "https://i.ibb.co/YjT4w4D/274312136-479442083560952-902356903680133127-n.jpg",
      date: new Date(2022, 1, 22, 22, 21, 0),
      teacher: "22/2/2022 at 22:22",
    },
  ];
  timeouts.forEach((timeout) => clearTimeout(timeout));
  timeouts = [];

  // added 5.5 hours to the time to account for timezone
  const now = new Date();
  now.addHours(5.5);
  lessons.forEach((lesson) => {
    const delay = lesson.date - now;

    if (delay > 0) setTimer(delay, getLessonEmbed(lesson));
  });

  console.log(`IST time : ${now.toISOString()}`);
  console.log(`${lessons.length} lessons & ${timeouts.length} timeouts`);
};

const setTimer = (delay, embed) => {
  const timeout = setTimeout(async () => {
    const channel = await client.channels.fetch(process.env.CHANNEL_ID);
    channel.send({
//       content: "<@&909830683332050954> :mega:",
      content: "<@349424080254140418> <@809048029160013844> :mega:",
      embeds: [embed],
    });
    console.log(`Message sent | ${embed.title}`);
  }, delay);

  timeouts.push(timeout);
};

const getLessonEmbed = (lesson) => {
  const embed = new MessageEmbed();
  embed.setTitle(lesson.title);
  embed.setURL(lesson.link);
  embed.setColor("#58efff");
  embed.setDescription(
    `<t:${lesson.date.addHours(-5.5).getTime() / 1000}>` +
      "\n" +
      `**${lesson.teacher}**`
  );
  embed.setThumbnail("https://i.ibb.co/mRK5x7M/School-Slave.gif");

  return embed;
};

// write a function to add hours to a date
Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

// example lessons if required for testing
// const lessons = [
//   {
//     status: 200,
//     url: "https://www.youtube.com/watch?v=q6EoRBvdVPQ",
//     title: "testing lesson",
//     link: "https://www.youtube.com/watch?v=7_X_Q-_Z-_U",
//     date: new Date(2022, 1, 14, 12, 24, 0),
//     teacher: "bruh",
//   },
//   {
//     status: 200,
//     url: "https://www.youtube.com/watch?v=q6EoRBvdVPQ",
//     title: "testing lesson 1",
//     link: "https://www.youtube.com/watch?v=7_X_Q-_Z-_U",
//     date: new Date(2022, 1, 14, 12, 25, 0),
//     teacher: "bruh",
//   },
// ];
