const { models } = require("../libs/mysql");

class ProductoService {
  constructor() {}

  async findAll() {
    const products = await models.Producto.findAll({
      include: [models.Categoria, models.Marca]
    });
    return products;
  }

  async create(producto){
    const newProduct = await models.Producto.create(producto);

    return newProduct
  }
}

module.exports = ProductoService;
