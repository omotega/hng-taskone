const mongoose = require("mongoose");
const config = require("../config/env");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(config.mongoUri);
    console.log(`db connected at ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = { dbConnect };
