const express = require('express')

const MetodoPagoService = require('../services/metodoPago.service')

const metodoPagoApi = (app) => {
    
    const router = express.Router()

    app.use('/api/metodoPago', router)

    const metodoPagoService = new MetodoPagoService();

    router .get('/', async (req, res, next) => {

        try{
            const metodoPago= await metodoPagoService.findAll()

            res.status(200).json({
                data: metodoPago,
                message: 'Metodo de pago',
            });
        }   catch(error){
            res.status(500).json({
                data: error,
                message: 'No hay metodo de pago',
            });
        }
    });
};

module.exports = metodoPagoApi;