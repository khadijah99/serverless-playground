import { getLogger } from "log4js";
import { Sequelize } from "sequelize-typescript";
const logger = getLogger("postgres-to-dynamodb handler");
logger.level = "debug";
//var dynamo = require('dynamodb');
var AWS = require("aws-sdk");

AWS.config.update({
  region: process.env.AWS_REGION,
  endpoint: process.env.DYNAMO_ENDPOINT,
});

let dyn = new AWS.DynamoDB({
  endpoint: new AWS.Endpoint("http://localhost:8000"),
});
var documentClient = new AWS.DynamoDB.DocumentClient();

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  dialect: "postgres",
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});
module.exports.handler = async () => {
  try {
    const users = await sequelize.query(
      'SELECT id, "First_name", "Middle_name", "Last_name", "Email", "Cell_No", "Gender", "City", "Street", "House_No", "Country", "Zipcode", "createdAt", "updatedAt", "Status" FROM public."Users";'
    );
    logger.info(users[0]);

    var params = {
      TableName: "Users",
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" }, //Partition key
        //{ AttributeName: "title", KeyType: "RANGE" }  //Sort key
      ],
      AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "N" },
        //{ AttributeName: "title", AttributeType: "S" }
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    };

    users[0].forEach((element: any) => {
      var params = {
        TableName: "Users",
        Item: element,
      };

      documentClient.put(params, function (err: any, data: any) {
        if (err) {
          console.error("Error JSON:", JSON.stringify(err, null, 2));
        } else {
          console.log("Added user successfully!");
        }
      });
    });

    dyn.createTable(params, function (tableErr: any, tableData: any) {
      if (tableErr) {
        console.error("Error JSON:", JSON.stringify(tableErr, null, 2));
      } else {
        console.log("Created table successfully!");
      }
    });

    dyn.listTables(function (err: any, data: any) {
      console.log("listTables", err, data);
    });
  } catch (err) {
    console.log(err);
  }
};
