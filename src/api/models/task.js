const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    date: { type: Date, required: true },
    priority: { type: String, enum: ["baja", "media", "alta"], default: "media" },
    completed: { type: Boolean, default: false },
    place: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    img: { type: String, required: true },
  },
  {
    collection: "tasks"
  }
);

const Task = mongoose.model("Task", taskSchema, "tasks");
module.exports = Task;