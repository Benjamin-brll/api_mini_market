const express = require('express')

const VentaService = require('../services/venta.service')

const ventasApi = (app) => {

    const router = express.Router()

    const ventaService = new VentaService()

    app.use('/api/ventas', router)

    router.get('/', async (req, res, next) => {

        try {
            const ventas = await ventaService.findAll()
            
            res.status(200).json({'data': ventas, 'message': 'ventas listadas'})
        } catch (error) {
            res.status(500).json({'data': error, 'message': 'ventas no listadas'})
        }
    })
}

module.exports = ventasApi