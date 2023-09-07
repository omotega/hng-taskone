const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to my hng task one");
});

app.get("/profile", (req, res) => {
  const { slack_name, track } = req.query;
  const dateValue = new Date();
  const utcTime = new Date(
    currentDate.getTime() + currentDate.getTimezoneOffset() * 60000
  );
  const utcOffset2 = new Date(
    utcTime.getTime() + 2 * 60 * 60 * 1000
  ).toISOString();

  const data = {
    slack_name: slack_name,
    current_day: dateValue.getDay(),
    utc_time: utcOffset2,
    track: track,
    github_file_url:
      "https://github.com/omotega/hng-taskone/blob/main/index.js",
    github_repo: "https://github.com/omotega/hng-taskone",
    statuscode: 200,
  };
  console.log(data);
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
