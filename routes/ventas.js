const express = require('express')

const VentasService = require('../services/venta.service')

const ventasApi = (app) => {

    const router = express.Router()

    const ventasService = new VentasService()

    app.use('/api/ventas', router)

    router.get('/', async (req, res, next) => {

        try {
            const ventas = await ventasService.findAll()
            
            res.status(200).json({'data': ventas, 'message': 'ventas listadas'})
        } catch (error) {
            res.status(500).json({'data': error, 'message': 'ventas no listadas'})
        }
    })
}

module.exports = ventasApi