import { getLogger } from "log4js";
const logger = getLogger("welcome handler");
logger.level = "debug";
module.exports.handler = async (event: any) => {
    try {
        event.Records.forEach((record:any) => {
          const { body } = record;
          logger.debug(body);
        });
    } catch (err) {
      console.log(err);
    }
  };
  