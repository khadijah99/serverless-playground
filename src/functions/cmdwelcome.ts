import { getLogger } from "log4js";
const logger = getLogger("cmd welcome handler");
logger.level = "debug";
module.exports.handler = async () => {
    try {
        logger.info("CMD Welcome")
    } catch (err) {
      console.log(err);
    }
  };
  