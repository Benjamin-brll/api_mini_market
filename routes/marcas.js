const express = require('express')

const MarcasService = require('../services/marcas.service')

const marcasApi = (app) => {
    
    const router = express.Router()

    app.use('/api/marcas', router)

    const marcasService = new MarcasService()

    router.get('/', async (req, res, next) => {

        try{
            const marcas = await marcasService.findAll()

            res.status(200).json({
                data: marcas,
                message: 'Marcas',
            });
        }   catch(error){
            res.status(500).json({
                data: error,
                message: 'No hay marcas existentes',
            });
        }
    });
}

module.exports = marcasApi;