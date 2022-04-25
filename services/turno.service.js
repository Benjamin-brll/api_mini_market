const { models } = require("../libs/mssql");

class TurnoService {
  constructor() {}

  async findAll() {
    const turnos = await models.Turno.findAll();
    return turnos;
  }
}

module.exports = TurnoService;
