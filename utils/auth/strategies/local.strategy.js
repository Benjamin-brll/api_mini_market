const { Strategy } = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const UsuarioService = require('../../../services/usuario.service')

const usuarioService = new UsuarioService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
},
    async (email, password, done) => {

        try {

            const user = await usuarioService.findByEmail(email)

            if (!user) {
                done(boom.unauthorized(), false)
            }

            const isMatch = await bcrypt.compare(password, user.contrasena)

            if (!isMatch) {
                done(boom.unauthorized(), false)
            }

            delete user.contrasena

            return done(null, user)

        } catch (error) {
            done(error, false)
        }

    }
)

module.exports = LocalStrategy