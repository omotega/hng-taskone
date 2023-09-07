const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  const { slack_name, track } = req.query;
  const dateValue = new Date();
  const data = {
    slack_name: slack_name,
    current_day: dateValue.getDay(),
    utc_time: "",
    track: track,
    github_file_url: "",
    github_repo: "",
    statuscode: 200,
  };
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
