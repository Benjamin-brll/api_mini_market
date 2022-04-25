const { Model, DataTypes } = require('sequelize')

const VENTAS_TABLE = "ventas";

const VentasSchema = {
    idVenta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    montoTotal: {
        allowNull: false,
        type: DataTypes.DECIMAL(6,2)
    },
    descripcion: {
        allowNull: false,
        type: "text",
    },
    idUsuario: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    fechaRealiza: {
        allowNull: false,
        type: "datetime",
        default: DataTypes.CURRENT_TIMESTAMP,
    },
    idMetodoPago: {
        allowNull: false,
        type: DataTypes.INTEGER,
    }
}

class Ventas extends Model {

    static associate(){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: VENTAS_TABLE,
            modelName: "Ventas",
            timestamps: false
        }

    }
}

module.exports = { VENTAS_TABLE, VentasSchema, Ventas }