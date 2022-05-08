const express = require('express')

const ImagenService = require('../services/imagen.service')

const imagenesApi = (app) => {

    const router = express.Router()

    app.use("/api/imagenes", router)

    const imagenService = new ImagenService();

    router .get('/', async (req, res, next) => {

        try {
            const imagenes = await imagenService.findAll()

            res.status(200).json({
                data: imagenes,
                message: 'Imagenes presentadas',
            });
        }   catch (error) {
            res.status(500).json({
                data: error,
                message: 'No hay imagenes',
            });
        }
    });
};

module.exports = imagenesApi;