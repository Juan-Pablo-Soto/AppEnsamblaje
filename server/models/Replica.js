module.exports = (sequelize, DataTypes) => {
    const Replica = sequelize.define("Replica", {
        owner: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        bloque: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombreDis: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
 

 
    // FALTA LO DE LOS BLOQUES ABC PARA LIMITAR CADA UNO DE ELLOS

    return Replica;
};
