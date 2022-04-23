const express = require('express')

const ProductService = require('../services/product.service')

const productsApi = (app) => {

    const router = express.Router()

    app.use('/api/products', router)

    const productService = new ProductService()

    router.get('/', async(req, res, next) => {
        
        try {
            const products = await productService.findAll()
            
            res.status(200).json({
                data: products,
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

module.exports = productsApi