const { models } = require("../libs/mssql");

class ProductoService {
  constructor() {}

  async findAll() {
    const products = await models.Producto.findAll();
    return products;
  }
}

module.exports = ProductoService;
