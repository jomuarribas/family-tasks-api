const { getTasks, addTasks, deleteTasks } = require("../controllers/task");
const { isUser } = require("../middlewares/auth");

const tasksRoutes = require("express").Router();

tasksRoutes.get('/', [isUser], getTasks);
tasksRoutes.post('/', [isUser], addTasks);
tasksRoutes.delete('/', [isUser], deleteTasks);


module.exports = tasksRoutes;