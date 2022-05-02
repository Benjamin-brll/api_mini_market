const express = require('express')

const MarcaService = require('../services/marca.service')

const marcasApi = (app) => {
    
    const router = express.Router()

    app.use('/api/marcas', router)

    const marcaService = new MarcaService()

    router.get('/', async (req, res, next) => {

        try{
            const marcas = await marcaService.findAll()

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