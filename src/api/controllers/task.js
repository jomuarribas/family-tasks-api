const Place = require("../models/place");
const Task = require("../models/task");
const User = require("../models/user");

// GET ALL TASKS
const getTasks = async (req, res, next) => {
  try {
    const allTasks = await Task.find()
      .populate('place')
      .populate('user')
    return res.status(200).json(allTasks);

  } catch (err) {
    return res.status(400).json(err.message);

  }
};

// POST ADD TASK
const addTasks = async (req, res, next) => {
  try {
    const addTask = new Task(req.body);
    const saveTask = await addTask.save();

    return res.status(200).json("Task has beed added");

  } catch (err) {
    return res.status(400).json(err.message);

  }
}

// DELETE TASKS
const deleteTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taskDeleted = await User.findByIdAndDelete(id);
    return res.status(200).json("Tarea eliminada")

  } catch (err) {

    return res.status(400).json('La tarea no ha podido eliminarse');
  }
};

module.exports = { getTasks, addTasks, deleteTasks };