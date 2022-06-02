const { models } = require("../libs/mysql");

class UsuarioService {
  constructor() {}

  async findByEmail(correo) {
    const user = await models.Usuario.findOne({ where: { correo: correo }});
    return user.get();
  }

  async create(usuario){
    const { idUsuario } = await models.Usuario.create(usuario);

    return idUsuario
  }
}

module.exports = UsuarioService;
