const express = require('express');
const router = express.Router();
const Filmes = require('../models/db_models');

router.post("/", async (req, res) => {
    const filme = new Filmes({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        imagemURL: req.body.imagemURL,
        trailerURL: req.body.trailerURL,
    })

    await filme.save()
    return res.send(filme)
});

module.exports = router;
