const { verifyToken } = require("../config/jwt");
const User = require("../models/user");

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(400).json('No estás autorizado');
    }

    const parsedToken = token.replace("Bearer ", "");
    const { id } = verifyToken(parsedToken);
    const user = await User.findById(id);

    if (user.rol === "administrador") {
      user.password = null;
      req.user = user;
      next();
    } else {
      return res.status(400).json('Tienes que ser administrador para ver este contenido');
    }

  } catch (err) {
    return res.status(400).json('No estás autorizado');

  }
};

const isUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(400).json('No estás autorizado');
    }

    const parsedToken = token.replace("Bearer ", "");
    const { id } = verifyToken(parsedToken);
    const user = await User.findById(id);

    if (user.rol === "usuario" || "administrador") {
      user.password = null;
      req.user = user;
      next();
    } else {
      return res.status(400).json('Tienes que ser usuario o administrador para ver este contenido');
    }

  } catch (err) {
    return res.status(400).json('No estás autorizado');

  }
};

module.exports = { isAdmin, isUser };