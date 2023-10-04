import { getLogger } from "log4js";
const logger = getLogger("publish sqs handler");
logger.level = "debug";
var AWS = require("aws-sdk");

module.exports.handler = async (event: any, context: any) => {
  try {
    var sqs = new AWS.SQS();
    var params = {
      DelaySeconds: 0,
      MessageBody: "This is a message from the SQS publisher",
      QueueUrl: process.env.SQS_URL,
    };

    sqs.sendMessage(params, function (err: any, data: { MessageId: any; }) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.MessageId);
      }
    });

  } catch (err) {
    console.log(err);
  }
  logger.info('publish sqs handler completed')
  return event;
};
