const express = require('express')

const ImagenesService = require('../services/imagenes.service')

const imagenesApi = (app) => {

    const router = express.Router()

    app.use("/api/imagenes", router)

    const imagenesService = new ImagenesService();

    router .get('/', async (req, res, next) => {

        try {
            const imagenes = await imagenesService.findAll()

            res.status(200).jon({
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