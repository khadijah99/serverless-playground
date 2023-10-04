import { dump_log } from "../models/dump_log";

const { Sequelize } = require("sequelize-typescript");

export const sequelize = new Sequelize({
  database: process.env.DATABASE,
  dialect: process.env.DIALECT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});
sequelize.addModels([dump_log]);
