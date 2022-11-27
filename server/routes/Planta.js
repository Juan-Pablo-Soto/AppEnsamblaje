const express = require('express')
const router = express.Router()
const { Planta } = require("../models")


router.get("/", async (req, res) => {
    const listaPlanta = await Planta.findAll();
    res.json(listaPlanta);
});


router.post("/", async (req, res) => {
    const planta = req.body
    await Planta.create(planta);
    res.json(planta);
});


module.exports = router