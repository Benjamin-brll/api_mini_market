const { models } = require("../libs/mssql");

class categoriasService {
    constructor() {

    }

    async findAll() {
        const categorias = await models.Categoria.findAll();
        return categorias;
    }
}

module.exports = categoriasService;