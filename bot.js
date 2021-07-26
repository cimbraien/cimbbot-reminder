require("dotenv").config();

const Discord = require("discord.js");
const { dailyEmbed, ohEmbed, activityEmbed } = require("./messages");
const { getChannelID, createSurveys } = require("./commands/channels");

const client = new Discord.Client();

client.on("ready", async () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
	if (msg.content[0] != "!") {
		return;
	}
	const cmd = msg.content.split(" ")[0].substring(1).toLowerCase();
	const isAdmin = msg.guild.member(msg.author).hasPermission("ADMINISTRATOR");

	if (isAdmin) {
		switch (cmd) {
			case "channelid":
				getChannelID(msg);
				break;
			case "addreminder":
				createSurveys(msg);
				break;
		}
	}
});

client.login(process.env.DISCORD_API_TOKEN);

module.exports = client;
