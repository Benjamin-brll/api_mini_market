const { models } = require("../libs/mssql");

class UserService {
  constructor() {}

  async findAll() {
    const users = await models.Usuario.findAll();
    return users;
  }
}

module.exports = UserService;
