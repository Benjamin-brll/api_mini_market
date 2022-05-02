const { models } = require('../libs/mssql');

class imagenesService {

    constructor(){}

    async findAll() {
        const imagenes = await models.Imagen.findAll();
        return imagenes;
    }
}

module.exports = imagenesService;