const express = require("express");
const UsuarioService = require("../services/usuario.service");
const bcrypt = require('bcrypt')

const usuariosApi = (app) => {
  const router = express.Router();

  app.use("/api/usuarios", router);
  const usuarioService = new UsuarioService();

  router.post("/sign-in", async function (req, res, next) {
    console.log(req.body)
    
    let { correo, contrasena } = req.body

    const usuarioService = new UsuarioService();

    try {
      let usuario = await usuarioService.findByEmail(correo)
  
      let estaAutenticado = bcrypt.compareSync(contrasena, usuario.contrasena)
  
      delete usuario.contrasena
  
      console.log(estaAutenticado)
      if(!estaAutenticado){
        throw new Error()
      }else{
        res.status(200).json({
          data: {
            "estaAutenticado": true,
            "usuario": usuario,
            "message": "Autenticado con exito"
          }
        })
      }
    } catch (error) {
      res.status(401).json({
        data: {
          "estaAutenticado": false,
          "usuario": null,
          "message": "Correo o contraseña incorrecta"
        }
      })
    }

  });

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
