const { getUsers, registerUsers, loginUsers, deleteUsers, updateUsers } = require("../controllers/user");
const { isAdmin } = require("../middlewares/auth");

const usersRoutes = require("express").Router();

usersRoutes.get('/', [isAdmin], getUsers);
usersRoutes.post('/register', [isAdmin], registerUsers);
usersRoutes.post('/login', loginUsers);
usersRoutes.delete('/delete/:id', [isAdmin], deleteUsers);
usersRoutes.put('/update/:id', [isAdmin], updateUsers);


module.exports = usersRoutes;