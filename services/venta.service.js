const { models } = require("../libs/mysql");

class VentaService {

    constructor() {

    }

    async findAll() {
        const ventas = await models.Venta.findAll()
        return ventas
    }
}

module.exports = VentaService