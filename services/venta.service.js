const { models } = require("../libs/mysql");

class VentaService {

    constructor() {

    }

    async findAll() {
        const ventas = await models.Venta.findAll()
        return ventas
    }

    async create(venta){
        const ventaCreada = await models.Venta.create(venta);

        return ventaCreada
    }
}

module.exports = VentaService