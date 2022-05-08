const { models } = require("../libs/mssql");

class ProveedorService {
  constructor() {}

  async findAll() {
    const proveedores = await models.Proveedor.findAll();
    return proveedores;
  }
}

module.exports = ProveedorService;
