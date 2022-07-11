const { models } = require("../libs/mysql");

class DetalleVentaService {

    constructor() {

    }

    async findAll() {
        const ventas = await models.DetalleVenta.findAll()
        return ventas
    }

    async create(detalleVenta){
        const detalleVentaCreado = await models.DetalleVenta.create(detalleVenta);

        return detalleVentaCreado
    }
}

module.exports = DetalleVentaService