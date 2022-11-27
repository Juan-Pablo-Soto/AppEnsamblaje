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
 

 
    // FALTA LO DE LOS BLOQUES ABC PARA LIMITAR CADA UNO DE ELLOS

    return Replica;
};
