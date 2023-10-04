import { getLogger } from "log4js";
const logger = getLogger("publish sns handler");
logger.level = "debug";
var AWS = require("aws-sdk");

module.exports.handler = async (event: any, context: any) => {
    try {     
      var sns = new AWS.SNS();
      var params = {
          Message: "Hello Slack!! This is a test message.", 
          Subject: "Test SNS message From Lambda",
          TopicArn: process.env.SNS_TOPIC,
          MessageAttributes: {
            'name' : {DataType: 'String', StringValue: 'khadija' }
          }
      };
      sns.publish(params, context.done);
     
    } catch (err) {
      console.log(err);
    }
    logger.info('publish to sns topic handler completed')
    return event;
  };
  