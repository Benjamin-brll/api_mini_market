const { models } = require("../libs/mssql");

class categoriasService {
    constructor() {

    }

    async findAll() {
        const categorias = await models.categorias.findAll();
        return categorias;
    }
}

module.exports = categoriasService;