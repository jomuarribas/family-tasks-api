require("dotenv").config()

const express = require("express");
const cloudinary = require("cloudinary").v2;
const { familyTasksDB } = require("./src/api/config/familyTasksDB");
const placesRoutes = require("./src/api/routes/place");
const tasksRoutes = require("./src/api/routes/task");
const usersRoutes = require("./src/api/routes/user");

const app = express();

familyTasksDB()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

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