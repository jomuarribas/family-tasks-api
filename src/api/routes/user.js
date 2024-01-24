const { getUsers, registerUsers, loginUsers, deleteUsers, updateUsers } = require("../controllers/user");
const { isAdmin } = require("../middlewares/auth");
const { upUserImg } = require("../middlewares/uploadImg");

const usersRoutes = require("express").Router();

usersRoutes.get('/', [isAdmin], getUsers);
usersRoutes.post('/register', upUserImg.single("img"), registerUsers);
usersRoutes.post('/login', loginUsers);
usersRoutes.delete('/delete/:id', [isAdmin], deleteUsers);
usersRoutes.put('/update/:id', [isAdmin, upUserImg.single("img")], updateUsers);

module.exports = usersRoutes;