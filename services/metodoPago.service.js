const { models } = require("../libs/mssql");

class metodoPagoService{
    constructor() {}

    async findAll(){
        const metodoPago = await models.MetodoPago.findAll();
        return metodoPago;
    }
}

module.exports = metodoPagoService;