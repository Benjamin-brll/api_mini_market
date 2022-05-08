const { models } = require("../libs/mysql");

class TurnoService {
  constructor() {}

  async findAll() {
    const turnos = await models.Turno.findAll();
    return turnos;
  }
}

module.exports = TurnoService;
