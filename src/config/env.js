const dotenv = require("dotenv");
dotenv.config();

const config = {
  mongoUri: process.env.MONGO_URI,
  Port:process.env.PORT
};

module.exports = config;
