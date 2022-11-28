const express = require('express')
const router = express.Router()
const { Planta } = require("../models")
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
    const listaPlanta = await Planta.findAll();
    res.json(listaPlanta);
});


router.post("/", async (req, res) => {
    const planta = req.body
    await Planta.create(planta);
    res.json(planta);
});

router.get("/:id", async (req, res) =>{
    const id = req.params.id;
    const planta = await Planta.findByPk(id);
    res.json(planta);
});

router.get("/bus/:nombr", async (req, res) =>{
    const nombr = req.params.nombr;
    const modelo = await Planta.findAll({
        where: {
            nombreEmpresa: {
            [Op.substring]: nombr
          }
        }
      });
    res.json(modelo);
});
router.delete("/:id", async (req, res) =>{
    const id = req.params.id;
    await Planta.destroy({
        where: {
          id: id,
        },
      });
    
      res.json("DELETED SUCCESSFULLY");
});


module.exports = router