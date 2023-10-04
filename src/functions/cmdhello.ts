import { getLogger } from "log4js";
const logger = getLogger("cmd hello handler");
logger.level = "debug";
module.exports.handler = async () => {
    try {
      var appRoot = require('app-root-path');
      logger.info(appRoot.path)
      logger.info("CMD Hello")

    } catch (err) {
      console.log(err);
    }
  };
  