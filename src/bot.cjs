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

  // add get lessons to lessons every 30 minutes
  await setLessonTimers();
  setInterval(async () => await setLessonTimers(), 1800000);
});

const setLessonTimers = async () => {
  lessons = [
    {
      status: 200,
      url: "https://www.youtube.com/watch?v=q6EoRBvdVPQ",
      title: "testing lesson",
      link: "https://www.youtube.com/watch?v=7_X_Q-_Z-_U",
      date: new Date(2022, 1, 14, 14, 29, 0),
      teacher: "bruh",
    },
  ];
  // lessons = await getLessons();
  timeouts.forEach((timeout) => clearTimeout(timeout));
  timeouts = [];

  const now = new Date();
  lessons.forEach((lesson) => {
    const delay = lesson.date - now;

    if (delay > 0) setTimer(delay, getLessonEmbed(lesson));
  });

  console.log(
    `${now.toISOString()} | ${lessons.length} lessons & ${
      timeouts.length
    } timeouts`
  );
};

const setTimer = (delay, embed) => {
  const timeout = setTimeout(() => {
    client.channels.fetch(process.env.CHANNEL_ID).then((channel) =>
      channel.send({
        content: "<@&909830683332050954> :mega:",
        embeds: [embed],
      })
    );
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
    `<t:${lesson.date.getTime() / 1000}>` + "\n" + `**${lesson.teacher}**`
  );
  embed.setThumbnail("https://i.ibb.co/mRK5x7M/School-Slave.gif");

  return embed;
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
