const express = require('express')
const router = express.Router()
const { Automovil } = require("../models")
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
    //se le da la informacion de los carros en la base de datos
    const listaAutomoviles = await Automovil.findAll();
    res.json(listaAutomoviles);
});

router.get("/:id", async (req, res) =>{
    const id = req.params.id;
    const modelo = await Automovil.findByPk(id);
    res.json(modelo);
});




router.get("/bus/:nombr", async (req, res) =>{
    const nombr = req.params.nombr;
    const modelo = await Automovil.findAll({
        where: {
          nombre: {
            [Op.substring]: nombr
          }
        }
      });
    res.json(modelo);
});

router.post("/", async (req, res) => {
    const automovil = req.body
    //logica de insercion de datos en la tabla de automoviles
    await Automovil.create(automovil);
    res.json(automovil);
});


router.delete("/:id", async (req, res) =>{
    const id = req.params.id;
    await Automovil.destroy({
        where: {
          id: id,
        },
      });
    
      res.json("DELETED SUCCESSFULLY");
});

module.exports = router