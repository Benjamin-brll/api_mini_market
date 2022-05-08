const { models } = require("../libs/mysql");

class UsuarioService {
  constructor() {}

  async findAll() {
    const users = await models.Usuario.findAll();
    return users;
  }
}

module.exports = UsuarioService;
