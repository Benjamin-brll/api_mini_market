const express = require("express");

const UsuarioService = require("../services/usuario.service");

const usersApi = (app) => {
  const router = express.Router();

  app.use("/api/users", router);

  const usuarioService = new UsuarioService();

  router.get("/", async (req, res, next) => {
    try {
      const users = await usuarioService.findAll();

      res.status(200).json({
        data: users,
        message: "Usuarios listados",
      });
    } catch (error) {
      res.status(500).json({
        data: error,
        message: "Usuarios no listados",
      });
    }
  });
};

module.exports = usersApi;
