require("dotenv").config();
const cron = require("node-cron");
const Discord = require("discord.js");
const client = new Discord.Client();
const channelKelasId = "868443559316045864";
let channelKelas;
//const runningSurvey = [];

const createDailyEmbed = () => {
	return new Discord.MessageEmbed()
		.setColor("#006b10")
		.setTitle("Daily Survey Reminder")
		.setAuthor(
			"cimbBot-reminder",
			"https://i.imgur.com/LUeW3ZG.jpg",
			"https://github.com/cimbraien"
		)
		.setThumbnail("https://i.imgur.com/LUeW3ZG.jpg")
		.addFields(
			{ name: "\u200B", value: "\u200B" },
			{
				name: "Date",
				value: new Date().toLocaleDateString("id-ID", {
					timeZone: "Asia/Jakarta",
					year: "numeric",
					month: "long",
					day: "numeric",
					weekday: "long",
				}),
			},
			{
				name: "Survey Link",
				value: "[Click Here](https://forms.gle/KWfM9Ga63nQzc4qd8)",
			}
		)
		.setTimestamp();
};

const createOHEmbed = () => {
	return new Discord.MessageEmbed()
		.setColor("#006b10")
		.setTitle("Office Hour Survey Reminder")
		.setAuthor(
			"cimbBot-reminder",
			"https://i.imgur.com/LUeW3ZG.jpg",
			"https://github.com/cimbraien"
		)
		.setThumbnail("https://i.imgur.com/LUeW3ZG.jpg")
		.addFields(
			{ name: "\u200B", value: "\u200B" },
			{
				name: "Date",
				value: new Date().toLocaleDateString("id-ID", {
					timeZone: "Asia/Jakarta",
					year: "numeric",
					month: "long",
					day: "numeric",
					weekday: "long",
				}),
			},
			{
				name: "Survey Link",
				value: "[Click Here](https://airtable.com/shrwvRFqrdQmvkzR7)",
			}
		)
		.setTimestamp();
};

const createActivityEmbed = () => {
	return new Discord.MessageEmbed()
		.setColor("#006b10")
		.setTitle("Activity Survey Reminder")
		.setAuthor(
			"cimbBot-reminder",
			"https://i.imgur.com/LUeW3ZG.jpg",
			"https://github.com/cimbraien"
		)
		.setThumbnail("https://i.imgur.com/LUeW3ZG.jpg")
		.addFields(
			{ name: "\u200B", value: "\u200B" },
			{
				name: "Date",
				value: new Date().toLocaleDateString("id-ID", {
					timeZone: "Asia/Jakarta",
					year: "numeric",
					month: "long",
					day: "numeric",
					weekday: "long",
				}),
			},
			{
				name: "Survey Link",
				value: "[Click Here](https://airtable.com/shrwvRFqrdQmvkzR7)",
			}
		)
		.setTimestamp();
};

client.on("ready", async () => {
	console.log(`Logged in as ${client.user.tag}!`);
	channelKelas = await client.channels.fetch(channelKelasId);
	const survey = await channelKelas.send(createDailyEmbed());
	runningSurvey.push(survey);

	cron.schedule(
		"20 12 * * 1-5",
		async () => {
			const survey = await channelKelas.send(createDailyEmbed());
			//runningSurvey.push(survey);
		},
		{
			timezone: "Asia/Jakarta",
		}
	);
	cron.schedule(
		"30 20 * * 1-5",
		async () => {
			const survey = await channelKelas.send(createOHEmbed());
			//runningSurvey.push(survey);
		},
		{
			timezone: "Asia/Jakarta",
		}
	);
	cron.schedule(
		"10 17 * * 1,3,5",
		async () => {
			const survey = await channelKelas.send(createActivityEmbed());
			//runningSurvey.push(survey);
		},
		{
			timezone: "Asia/Jakarta",
		}
	);
});

client.on("message", async (msg) => {
	const commands = ["getChannelAndGuildID", "setChannel", "getRunningSurveys"];
	if (commands.includes(msg.content) && msg.author.id != "145499841806598144") {
		msg.channel.send("Cuma cimbraien yang bisa oi");
		return;
	}
	if (msg.content == "getChannelAndGuildID") {
		console.log(msg.channel);
		msg.channel.send(
			`Guild ID :	${msg.guild.id}\nChannel ID :	${msg.channel.id}\nChannel Parent ID: ${msg.guild.parentID}`
		);
	}
	if (msg.content == "setChannel") {
		channelKelas = msg.channel;
		msg.channel.send("Channel set successfully");
	}
	/* if (msg.content == "getRunningSurveys") {
		console.log(runningSurvey);
		msg.channel.send(runningSurvey[0]);
	} */
});

client.login(process.env.DISCORD_API_TOKEN);
