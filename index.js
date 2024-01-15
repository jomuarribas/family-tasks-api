require("dotenv").config()

const express = require("express");
const { familyTasksDB } = require("./src/api/config/familyTasksDB");
const placesRoutes = require("./src/api/routes/place");
const tasksRoutes = require("./src/api/routes/task");
const usersRoutes = require("./src/api/routes/user");

const app = express();

familyTasksDB()

app.use(express.json());

app.use("/api/places", placesRoutes);
app.use("/api/tasks", tasksRoutes);
app.use("/api/users", usersRoutes);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});