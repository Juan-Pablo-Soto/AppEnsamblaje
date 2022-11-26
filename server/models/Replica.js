module.exports = (sequelize, DataTypes) => {
    const Replica = sequelize.define("Replica", {
        placa: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        owner: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        bloque: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
 
    Replica.associate = (models) => {
        Replica.hasOne(models.Planta)
        Replica.hasOne(models.Automovil)
    }
 
    // FALTA LO DE LOS BLOQUES ABC PARA LIMITAR CADA UNO DE ELLOS

    return Replica;
};
