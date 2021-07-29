const { dailyEmbed, ohEmbed, activityEmbed } = require("./messages");
const cron = require("node-cron");

const runningSurveys = [];

// * Survey types enum
exports.SurveyType = {
	DAILY: {
		embed: dailyEmbed,
	},
	OFFICEHOUR: {
		embed: ohEmbed,
	},
	ACTIVITY: {
		embed: activityEmbed,
	},
};

// * time Object structure
/* {
    weekday: "monday",
    hour: 12,
    minute: 20,
    timezone: "Asia/Jakarta",
    } */
exports.createReminder = (time, surveyType, channel, activityName = null) => {
	if (!time) return;

	const weekday = time.weekday || "*";
	const hour = time.hour || "*";
	const minute = time.minute || "*";
	const timezone = time.timezone || "Asia/Jakarta";

	cron.schedule(
		`${minute} ${hour} * * ${weekday}`,
		async () => {
			let msg;
			if (activityName) {
				msg = await channel.send(surveyType.embed(activityName));
			} else {
				msg = await channel.send(surveyType.embed());
			}
			msg.react("✅");
		},
		{
			timezone,
		}
	);
};

exports.checkReactions = () => {};
