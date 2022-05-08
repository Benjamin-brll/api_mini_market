const { models } = require("../libs/mysql");

class ImagenService {

    constructor(){}

    async findAll() {
        const imagenes = await models.Imagen.findAll();
        return imagenes;
    }
}

module.exports = ImagenService;