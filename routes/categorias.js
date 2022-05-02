const express = require('express')

const CategoriasService = require('../services/categorias.service')

const categoriasApi = (app) => {
    
    const router = express.Router()

    app.use("/api/categorias", router)

    const categoriasService = new CategoriasService();

    router .get('/', async (req, res, next) => {

        try {
            const categorias = await categoriasService.findAll()

            res.status(200).json({
                data: categorias,
                message: 'Categorias existentes',
            });
        }   catch (error) {
            res.status(500).json({
                data: error,
                message: 'No hay categorias',
            });
        }
    });
};

module.exports = categoriasApi;