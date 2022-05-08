const express = require("express");

const UsuarioService = require("../services/usuario.service");

const usuariosApi = (app) => {
  const router = express.Router();

  app.use("/api/usuarios", router);

  const usuarioService = new UsuarioService();

  router.get("/", async (req, res, next) => {
    try {
      const usuarios = await usuarioService.findAll();

      res.status(200).json({
        data: usuarios,
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

module.exports = usuariosApi;
