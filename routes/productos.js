const express = require('express')

const ProductoService = require('../services/producto.service')

const productosApi = (app) => {

    const router = express.Router()

    app.use('/api/productos', router)

    const productoService = new ProductoService()

    router.get('/', async(req, res, next) => {
        
        try {
            const productos = await productoService.findAll()
            
            res.status(200).json({
                data: productos,
                message: 'productos listados'
            })
        } catch (error) { 
            res.status(500).json({
                data: error,
                message: 'productos no listados'
            })
        }
    })
}

module.exports = productosApi