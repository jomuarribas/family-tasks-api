const Place = require("../models/place");
const Task = require("../models/task");
const User = require("../models/user");
const { deleteImg } = require("../utils/deleteImg");

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
    if (req.file) {
      addTask.img = req.file.path;
    }
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
    deleteImg(taskDeleted.img)
    return res.status(200).json("Tarea eliminada")

  } catch (err) {

    return res.status(400).json('La tarea no ha podido eliminarse');
  }
};

// UPDATE TASKS
const updateTasks = async (req, res, next) => {
  try {
    const { id } = req.params

    const newTask = new Task(req.body)
    newTask._id = id

    if (req.file) {
      const OldTaskImg = await Task.findById(id);
      deleteImg(OldTaskImg.img);
      newTask.img = req.file.path;
    }

    const taskUpdate = await Task.findByIdAndUpdate(id, newTask, { new: true })

    return res.status(200).json(taskUpdate)

  } catch (err) {

    return res.status(400).json('La tarea no ha podido actualizarse');

  }
};

module.exports = { getTasks, addTasks, deleteTasks, updateTasks };