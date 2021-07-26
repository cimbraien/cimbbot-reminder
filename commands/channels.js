const Discord = require("discord.js");
const { SurveyType, createReminder } = require("../reminder");
//message.member.hasPermission("ADMINISTRATOR")

class Channels {
	getChannelID(msg) {
		msg.channel.send(`Channel ID :   ${msg.channel.id}`);
	}

	createSurveys(msg) {
		createReminder(
			{
				weekday: "1-5",
				hour: "12",
				minute: "20",
			},
			SurveyType.DAILY,
			msg.channel
		);
		createReminder(
			{
				weekday: "1-5",
				hour: "20",
				minute: "30",
			},
			SurveyType.OFFICEHOUR,
			msg.channel
		);
		const activityNames = ["All Hands", "English Express", "Friday Social"];
		for (let i = 1; i <= 5; i += 2) {
			createReminder(
				{
					weekday: i,
					hour: "17",
					minute: "10",
				},
				SurveyType.ACTIVITY,
				msg.channel,
				activityNames[Math.floor(i / 2)]
			);
		}
		msg.channel.send("Survey reminders created!");
	}
}
module.exports = new Channels();
