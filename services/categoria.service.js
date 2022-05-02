const { models } = require("../libs/mssql");

class CategoriaService {
    constructor() {

    }

    async findAll() {
        const categorias = await models.Categoria.findAll();
        return categorias;
    }
}

module.exports = CategoriaService;