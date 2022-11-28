const express = require('express')
const router = express.Router()
const { Replica } = require("../models")
const { Op } = require("sequelize");


router.post("/", async (req, res) => {
    const replica = req.body
    await Replica.create(replica);
    res.json(replica);
});


router.get("/A/:Eid", async (req, res) =>{
    const Eid = req.params.Eid;
    const replica = await Replica.findAll({
        where: {
            [Op.and]: [{ bloque: "A" }, {PlantumId : Eid }]
        }
    });
    res.json(replica);
});

router.get("/B/:Eid", async (req, res) =>{
    const Eid = req.params.Eid;
    const replica = await Replica.findAll({
        where: {
            [Op.and]: [{ bloque: "B" }, {PlantumId : Eid }]
        }
    });
    res.json(replica);
});


router.get("/C/:Eid", async (req, res) =>{
    const Eid = req.params.Eid;
    const replica = await Replica.findAll({
        where: {
            [Op.and]: [{ bloque: "C" }, {PlantumId : Eid }]
        }
    });
    res.json(replica);
});

router.delete("/:id", async (req, res) =>{
    const id = req.params.id;
    await Replica.destroy({
        where: {
          id: id,
        },
      });
    
      res.json("DELETED SUCCESSFULLY");
});


module.exports = router