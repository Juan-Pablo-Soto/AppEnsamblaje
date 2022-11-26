module.exports = (sequelize, DataTypes) => {
    const Planta = sequelize.define("Planta", {
        nombreEmpresa: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        provincia: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        canton: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        distrito: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        restoDireccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombreContacto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telContacto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
 
   
    return Planta;
};
