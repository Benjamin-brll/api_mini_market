const { models } = require("../libs/mssql");

class ProductoService {
  constructor() {}

  async findAll() {
    const products = await models.Producto.findAll({
      include: [models.Marca, models.Categoria]
    });
    return products;
  }

  async create(producto){
    const newProduct = await models.Producto.create(producto);

    return newProduct
  }
}

module.exports = ProductoService;
