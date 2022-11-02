const express = require("express");
const UsuarioService = require("../services/usuario.service");
const bcrypt = require('bcrypt');
const passport = require("passport");
const jwt = require('jsonwebtoken')

const { config } = require('../config/index')

const usuariosApi = (app) => {
  const router = express.Router();

  app.use("/api/usuarios", router);
  const usuarioService = new UsuarioService();

  router.post("/sign-in",
    passport.authenticate('local', { session: false }),
    async function (req, res, next) {
      try {

        const user = req.user

        const payload = {
          sub: user.idUsuario,
          role: user.isAdmin ? 'admin' : 'customer',
        }

        const token = jwt.sign(payload, config.jwtSecret)

        res.json({
          user,
          token
        })

      } catch (error) {
        res.status(401).json({
          error
        })
      }

    }
  );

  router.post('/', async (req, res, next) => {
    try {

      const { body } = req

      const idUsuario = await usuarioService.create(body);

      res.status(201).json({
        data: {
          estaRegistrado: true,
          message: 'Usuario creado con exito!'
        }
      })
    } catch (error) {
      res.status(500).json({
        data: {
          estaRegistrado: false,
          message: 'Oops hubo un error con el registro'
        }
      })
    }
  })
};

module.exports = usuariosApi;
