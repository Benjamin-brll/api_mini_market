const { models } = require("../libs/mysql");

class ProveedorService {
  constructor() {}

  async findAll() {
    const proveedores = await models.Proveedor.findAll();
    return proveedores;
  }
}

module.exports = ProveedorService;
