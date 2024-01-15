const { generateSign } = require("../config/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// GET ALL USERS
const getUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find()
    return res.status(200).json(allUsers);

  } catch (err) {
    return res.status(400).json(err.message);

  }
};

// REGISTER USERS
const registerUsers = async (req, res, next) => {
  try {
    const addUser = new User(req.body);

    const userDuplicated = await User.findOne({ username: req.body.username })

    if (userDuplicated) {
      return res.status(400).json('El usuario ya está registrado');
    } else {
      const saveUser = await addUser.save();
      return res.status(200).json("Usuario registrado");
    }

  } catch (err) {
    return res.status(400).json(err.message);

  }
};

// LOGIN USERS
const loginUsers = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = generateSign(user._id);
        return res.status(200).json({ user, token });
      } else {
        return res.status(400).json('El usuario o contraseña no existen');
      }
    } else {
      return res.status(400).json('El usuario o contraseña no existen');
    }

  } catch (err) {
    return res.status(400).json(err.message)
  }
};

// DELETE USERS
const deleteUsers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);
    return res.status(200).json("Usuario eliminado")

  } catch (err) {

    return res.status(400).json('El usuario no ha podido eliminarse');
  }
};

// UPDATE USERS
const updateUsers = async (req, res, next) => {
  try {
    const { id } = req.params
    const newUser = new User(req.body)
    newUser._id = id

    const userUpdate = await User.findByIdAndUpdate(id, newUser, { new: true })

    return res.status(200).json(userUpdate)

  } catch (err) {

    return res.status(400).json('El usuario no ha podido actualizarse');

  }
};

module.exports = { getUsers, registerUsers, loginUsers, deleteUsers, updateUsers };