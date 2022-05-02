const { models } = require("../libs/mssql");

class metodoPagoService{
    constructor() {}

    async findAll(){
        const metodoPago = await models.metodoPago.findAll();
        return metodoPago;
    }
}

module.exports = metodoPagoService;