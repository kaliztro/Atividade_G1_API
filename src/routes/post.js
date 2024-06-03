const express = require('express');
const router = express.Router();
const Caderno = require('../models/db_models');
const dataAtual = require('../functions/data');

router.post("/", async (req, res) => {
    try {
        const { nome, valor, contato, data } = req.body;

        if (!nome) return res.status(400).send("Campo 'Nome' deve ser preenchido");
        if (!contato) return res.status(400).send("Campo 'Contato' deve ser preenchido");
        if (!valor) return res.status(400).send("Campo 'Valor' deve ser um número");

        const caderno = new Caderno({
            nome,
            valor,
            contato,
            data: data || dataAtual() 
        });

        await caderno.save();
        return res.send(`Cliente registrado com sucesso! \n\n Nome: ${caderno.nome}\n Valor: ${caderno.valor} \n Data: ${caderno.data}`);

    } catch (error) {
        console.error('Erro ao registrar cliente:', error);
        return res.status(500).send("Erro ao registrar cliente");
    }
});

module.exports = router;
