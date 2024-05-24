const express = require('express');
const router = express.Router();
const Caderno = require('../models/db_models');
const dataAtual = require('../functions/data');

router.post("/", async (req, res) => {
    const caderno = new Caderno({
        nome: req.body.nome,
        valor: req.body.valor,
        contato: req.body.contato,
        data: req.body.data,
    })

    caderno.data === undefined ? caderno.data = dataAtual() : caderno.data

    if (caderno.valor === undefined) {
        return  res.status(400).send("Campo 'Valor' deve ser um número");
    } else {
        
        // console.log(caderno.contato)
        // return res.send(caderno)
        await caderno.save()
        return res.send(`Cliente registrado com sucesso! \n\n ${caderno.nome}\n ${caderno.valor} \n ${caderno.data}`)
    }
});

module.exports = router;
