const { models } = require('../libs/mssql');

class imagenesService {

    constructor(){}

    async findAll() {
        const imagenes = await models.imagenes.findAll();
        return imagenes;
    }
}

module.exports = imagenesService;