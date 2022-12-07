const express = require('express')

const CategoriaService = require('../services/categoria.service')

const categoriasApi = (app) => {
    
    const router = express.Router()

    app.use("/api/categorias", router)

    const categoriaService = new CategoriaService();

    router .get('/', async (req, res, next) => {

        try {
            const categorias = await categoriaService.findAll()

            res.status(200).json({
                data: categorias,
                message: 'categorias listadas',
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