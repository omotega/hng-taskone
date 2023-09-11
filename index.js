const express = require("express");
const dotenv = require("dotenv");
const { getCurrentUTCTime } = require("./date");
const personRoute = require("./src/routes/person");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("welcome to my hng task");
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
  const utcdate = getCurrentUTCTime();

  const data = {
    slack_name: slack_name,
    current_day: dayName,
    utc_time: utcdate,
    track: track,
    github_file_url:
      "https://github.com/omotega/hng-taskone/blob/main/index.js",
    github_repo_url: "https://github.com/omotega/hng-taskone",
    status_code: 200,
  };
  res.status(200).json(data);
});

app.use("/api", personRoute);

app.use((req, res) =>
  res.status(404).send({
    status: "error",
    error: "Not found",
    message: "Route not correct kindly check url.",
  })
);

module.exports = app;
