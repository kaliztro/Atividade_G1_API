const express = require('express');
const router = express.Router();
const Caderno = require('../models/db_models');

router.put("/id/:id", async (req, res) => {
    const caderno = await Caderno.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        valor: req.body.valor,
        contato: req.body.contato,
        data: req.body.data,
    }, {
        new: true
    })

    return res.send(caderno)
})

module.exports = router;
