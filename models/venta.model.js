const { Model, DataTypes } = require('sequelize')

const VENTA_TABLE = "ventas";

const VentaSchema = {
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
        field: 'id_usuario',
        type: DataTypes.INTEGER,
    },
    fechaRealiza: {
        allowNull: false,
        type: "datetime",
        field: 'fecha_realiza',
        default: DataTypes.CURRENT_TIMESTAMP,
    },
    idMetodoPago: {
        allowNull: false,
        field: 'id_metodo_pago',
        type: DataTypes.INTEGER,
    }
}

class Venta extends Model {

    static associate(){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: VENTA_TABLE,
            modelName: "Venta",
            timestamps: false
        }

    }
}

module.exports = { VENTA_TABLE, VentaSchema, Venta }