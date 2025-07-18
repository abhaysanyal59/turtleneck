const fs = require("fs");
const mongoose = require("mongoose");
const LogModel = require("../schema/log.model")
require("dotenv").config();

exports.loadLogs = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);

  const data = fs.readFileSync("log.json", "utf-8");
  const logData = JSON.parse(data);

  await LogModel.insertMany(logData);

  console.log("Successful!");
};