const { models } = require("../libs/mssql");

class UserService {
  constructor() {}

  async findAll() {
    const users = await models.User.findAll();
    return users;
  }
}

module.exports = UserService;
