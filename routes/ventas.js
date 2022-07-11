const express = require('express')

const VentaService = require('../services/venta.service')
const DetalleVentaService = require('../services/detalleVenta.service')

const ventasApi = (app) => {

    const router = express.Router()

    const ventaService = new VentaService()
    const detalleVentaService = new DetalleVentaService()

    app.use('/api/ventas', router)

    router.get('/', async (req, res, next) => {

        try {
            const ventas = await ventaService.findAll()
            
            res.status(200).json({'data': ventas, 'message': 'ventas listadas'})
        } catch (error) {
            res.status(500).json({'data': error, 'message': 'ventas no listadas'})
        }
    })

    router.post('/', async (req, res, next) => {

        try {

            let productos = req.body.slice(0, -1)
            let extras = req.body.at(-1)

            console.log(productos)
            console.log(extras)
            
            const ventas = await ventaService.create({
                montoTotal: extras.montoTotal,
                montoTotal: extras.montoTotal,
                idUsuario: extras.id_usuario,
                idMetodoPago: 1,
                descripcion: 'venta',
                fechaRealiza: new Date()
            })

            for(producto of productos){
                const detalleVenta = await detalleVentaService.create({
                    idVenta: ventas.get('idVenta'),
                    idProducto: producto.id_producto,
                    subTotal: producto.sub_total,
                    cantidad: producto.cantidad
                })
            }
            
            res.status(201).json(
                [{
                    'success': true,
                    'message': 'Venta exitosa'
                }]
            )

        } catch (error) {
            res.status(500).json({
                'data': error,
                'message': 'Venta fallida'
            })
        }

    })
}

module.exports = ventasApi