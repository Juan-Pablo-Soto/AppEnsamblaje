
module.exports = (sequelize, DataTypes) => {
    const Automovil = sequelize.define("Automovil", {
        nombreDesigner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellidosDesigner: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        experienciaDesigner: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        nivelDesigner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        trans4x4:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        trans:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        matAscientos:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        motor:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        vidrios:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        espejos:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        sensoresF:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        sensoresT:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        sensoresL:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        cam:{
            type: DataTypes.STRING,
            allowNull: false,
        },    
        tablero:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        tapisado:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        sonido:{
            type: DataTypes.STRING,
            allowNull: false,
        },


    });


    Automovil.associate = (models) => {
        Automovil.hasMany(models.Replica)
    }
    return Automovil;


};