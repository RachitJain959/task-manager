const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: String,
  complete: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
