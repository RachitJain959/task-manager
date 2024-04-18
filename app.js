const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`));
