module.exports = (sequelize, DataTypes) => {
    const Designer = sequelize.define("Designer", {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      experiencia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nivel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
 
    return Designer;
  };

