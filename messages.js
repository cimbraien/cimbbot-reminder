const Discord = require("discord.js");

const botAvatar = "https://i.imgur.com/LUeW3ZG.jpg";
const githubLink = "https://github.com/cimbraien/cimbbot-reminder";
const dailyLink = "https://forms.gle/KWfM9Ga63nQzc4qd8";
const ohLink = "https://airtable.com/shrwvRFqrdQmvkzR7";
const activityLink = "https://airtable.com/shrwvRFqrdQmvkzR7";

exports.dailyEmbed = () => {
	return new Discord.MessageEmbed()
		.setColor("#006b10")
		.setTitle("Daily Survey Reminder")
		.setAuthor("cimbBot-reminder", botAvatar, githubLink)
		.setThumbnail(botAvatar)
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
				value: `[Click Here](${dailyLink})`,
			}
		)
		.setTimestamp();
};

exports.ohEmbed = () => {
	return new Discord.MessageEmbed()
		.setColor("#006b10")
		.setTitle("Office Hour Survey Reminder")
		.setAuthor("cimbBot-reminder", botAvatar, githubLink)
		.setThumbnail(botAvatar)
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
				value: `[Click Here](${ohLink})`,
			}
		)
		.setTimestamp();
};

exports.activityEmbed = (activityName) => {
	return new Discord.MessageEmbed()
		.setColor("#006b10")
		.setTitle(`Activity Survey Reminder - ${activityName}`)
		.setAuthor("cimbBot-reminder", botAvatar, githubLink)
		.setThumbnail(botAvatar)
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
				value: `[Click Here](${activityLink})`,
			}
		)
		.setTimestamp();
};
