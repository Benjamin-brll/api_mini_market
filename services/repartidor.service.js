const { models } = require("../libs/mssql");

class RepartidorService {
  constructor() {}

  async findAll() {
    const repartidores = await models.Repartidor.findAll();
    return repartidores;
  }
}

module.exports = RepartidorService;
