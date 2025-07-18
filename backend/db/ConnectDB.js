const mongoose = require("mongoose");
const MONGO_DB_URL = process.env.MONGO_DB_URI;

const ConnectDB = async () => {
  try {
    if (!MONGO_DB_URL) {
      return console.log("Mongo DB Connection not found in .env!!");
    }

    await mongoose.connect(MONGO_DB_URL);
    console.log(`Database connected Successfully!!`);
  } catch (error) {
    console.error("Unsuccessful connection with DB ", error);
  }
};

module.exports = ConnectDB;
