const app = require("./index");
const http = require("http");
const config = require("./src/config/env");
const { dbConnect } = require("./src/database/dbconnection");

const port = config.Port;
const server = http.createServer(app);

dbConnect();

server.listen(port, () => {
  console.log(`listen on port ${port}`);
});
