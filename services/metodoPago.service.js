const { models } = require("../libs/mysql");

class MetodoPagoService{
    constructor() {}

    async findAll(){
        const metodoPago = await models.MetodoPago.findAll();
        return metodoPago;
    }
}

module.exports = MetodoPagoService;