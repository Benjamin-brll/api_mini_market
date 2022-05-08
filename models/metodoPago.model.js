const { Model, DataTypes } = require('sequelize')

const METODO_PAGO_TABLE = 'metodos_pago';

const MetodoPagoSchema = {
    idMetodoPago: {
        primaryKey: true,
        allowNull: false,
        field: "id_metodo_pago",
        type: DataTypes.INTEGER,
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

class MetodoPago extends Model {

    static associate() {}
    
    static config(sequelize) {
        return {
            sequelize,
            tableName: METODO_PAGO_TABLE,
            modelName: "MetodoPago",
            timestamps: false
        }
    }
}

module.exports = {METODO_PAGO_TABLE, MetodoPagoSchema, MetodoPago}