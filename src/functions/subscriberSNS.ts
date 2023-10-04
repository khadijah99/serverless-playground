import { getLogger } from "log4js";
const logger = getLogger("sns subscriber handler");
logger.level = "debug";

var https = require("https");
var util = require("util");

module.exports.handler = (event: any, context: any) => {
  try {
    logger.debug(JSON.stringify(event, null, 2));
    logger.debug("Message From SNS:", event.Records[0].Sns.Message);
    logger.debug("Subject From SNS:", event.Records[0].Sns.Subject);

    const postData: any = {
      channel: "#sns-messages",
      username: "AWS SNS via Lambda",
      text: "*" + event.Records[0].Sns.Subject + "*",
      //"text": "Subject",
      icon_emoji: ":aws:",
    };

    var message = event.Records[0].Sns.Message;
    //var message = 'Hello';
    var severity = "";

    if (message.startsWith("ERROR")) {
      severity = "danger";
    } else if (message.startsWith("WARNING")) {
      severity = "warning";
    } else {
      severity = "good";
    }

    logger.debug("Message: " + message);
    logger.debug("Severity: " + severity);

    postData.attachments = [
      {
        color: severity,
        text: message,
      },
    ];

    var options = {
      method: "POST",
      hostname: "hooks.slack.com",
      port: process.env.SLACK_PORT,
      path: process.env.SLACK_PATH,
    };

    var req = https.request(options, function (res: any) {
      res.setEncoding("utf8");
      res.on("data", function (chunk: any) {
        context.done(null);
      });
    });

    logger.debug("postData" + postData);
    req.on("error", function (e: any) {
      console.log("problem with request: " + e.message);
    });

    req.write(util.format("%j", postData));
    req.end();
  } catch (err) {
    console.log(err);
  }
};
