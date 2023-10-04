var dynamo = require("dynamodb");
export const User = dynamo.define("User", {
  hashKey: "id",

  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,

  schema: {
    First_name: dynamo.types.string(),
    Middle_name: dynamo.types.string(),
    Last_name: dynamo.types.string(),
    Email: dynamo.types.string(),
    Cell_No: dynamo.types.string(),
    Gender: dynamo.types.string(),
    City: dynamo.types.string(),
    House_no: dynamo.types.number(),
    Country: dynamo.types.string(),
    Zipcode: dynamo.types.string(),
    Status: dynamo.types.string(),
  },
});
