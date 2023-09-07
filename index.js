const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to my hng task one");
});

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;
  const dateValue = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = daysOfWeek[dateValue.getDay()];
  const currentTime = dateValue.getTime();

  const minTime = currentTime - 3600000;
  const maxTime = currentTime + 3600000;

  const randomTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
  const formattedTime = new Date(randomTime).toISOString();


  const data = {
    slack_name: slack_name,
    current_day: dayName,
    utc_time: formattedTime,
    track: track,
    github_file_url:
      "https://github.com/omotega/hng-taskone/blob/main/index.js",
    github_repo_url: "https://github.com/omotega/hng-taskone",
    status_code: 200,
  };
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
