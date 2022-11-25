const express = require('express')
const router = express.Router()
const { Automovil } = require("../models")


router.get("/", async (req, res) => {
    //res.send("Hello world");
    //se le da la informacion de los carros en la base de datos
    const listaAutomoviles = await Automovil.findAll();
    res.json(listaAutomoviles);
});


router.post("/", async (req, res) => {
    const automovil = req.body
    //logica de insercion de datos en la tabla de automoviles
    await Automovil.create(automovil);
    res.json(automovil);
});
/* se utiliza un json con este formato para ingresar nuevos
automoviles
    {
    "tipo": "sedan",
    "trans4x4": "simple",
    "trans": "manual",
    "matAscientos": "cuero",
    "motor": "disel",
    "vidrios": "electricos",
    "espejos": "electricos",
    "sensoresF": "si",
    "sensoresT": "si",
    "sensoresL": "si",
    "cam": "si",
    "tablero": "digital",
    "tapisado": "cuero",
    "sonido": "si",
    "designer": "junior"
    }

*/




module.exports = router