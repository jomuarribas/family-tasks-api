const { getTasks, addTasks, deleteTasks, updateTasks } = require("../controllers/task");
const { isUser } = require("../middlewares/auth");
const { upTaskImg } = require("../middlewares/uploadImg");

const tasksRoutes = require("express").Router();

tasksRoutes.get('/', [isUser], getTasks);
tasksRoutes.post('/', [isUser, upTaskImg.single("img")], addTasks);
tasksRoutes.delete('/:id', [isUser], deleteTasks);
tasksRoutes.put('/:id', [isUser, upTaskImg.single("img")], updateTasks);


module.exports = tasksRoutes;