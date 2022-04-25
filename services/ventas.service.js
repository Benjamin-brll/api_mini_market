const { models } = require('../libs/mssql');

class VentaService {

    constructor() {

    }

    async findAll() {
        const ventas = await models.Ventas.findAll()
        return ventas
    }
}

module.exports = VentaService