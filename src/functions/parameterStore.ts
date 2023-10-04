import { getLogger } from "log4js";
const logger = getLogger("parameter store handler");
logger.level = "debug";
const AWS = require('aws-sdk');

module.exports.handler = async () => {
    try {
        const ssm = new AWS.SSM({region: `us-east-1`});

        //retrieve parameter
        const parameter = await ssm.getParameter({
            Name: 'secret-data',
            WithDecryption: true
        }).promise();
        const data = JSON.parse(parameter.Parameter.Value);
        logger.debug(data); 

        //create parameter
        await ssm.putParameter({
            Name: `/my-project/apikey`,
            Type: "SecureString",
            Value: "supersecretkey",
            Overwrite: true
           })
           .promise();
    } catch (err) {
        console.log(err);
    }
};
