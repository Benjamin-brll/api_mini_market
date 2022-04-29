const { models } = require("../libs/mssql");

class marcasService {

    constructor() {}

    async findAll() {
        const marcas = await models.marcas.findAll();
        return marcas;
    }
}

module.exports = marcasService;