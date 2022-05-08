const { models } = require("../libs/mysql");

class MarcaService {

    constructor() {}

    async findAll() {
        const marcas = await models.Marca.findAll();
        return marcas;
    }
}

module.exports = MarcaService;