const { Sequelize } = require('sequelize')
const { config } = require('../config/index')

const setupModels = require('../models/index')

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'mysql',
        port: config.dbPort,
        logging: false
    }
);

setupModels(sequelize)

sequelize.sync()

module.exports = sequelize