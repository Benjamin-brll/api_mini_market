const { Model, DataTypes } = require('sequelize');

const METODOPAGO_TABLE = "metodoPago";

const metodoPago = {
    idMetodoPago: {
        allowNull: false,
        primaryKey: true,
        field: "id_metodoPago",
    },

    nombre: {
        allowNull: false,
        type: "varchar(20)",
    },

    estado: {
        allowNull: false,
        type: "char(32)",
    }
}

class metodoPago extends Model {

    static associate() {}
    
    stattic config(sequelize) {
        return {
            sequelize,
            tableName: METODOPAGO_TABLE,
            modelName: "metodoPago",
            timestamps: false,
        }
    }
}

module.exports = {METODOPAGO_TABLE, metodoPagoSchema, metodoPago}