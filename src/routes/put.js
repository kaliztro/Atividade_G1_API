const express = require('express');
const router = express.Router();
const Filmes = require('../models/db_models');

router.put("/:id", async (req, res) => {
    const filme = await Filmes.findByIdAndUpdate(req.params.id, {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        imagemURL: req.body.imagemURL,
        trailerURL: req.body.trailerURL,
    }, {
        new: true
    })

    return res.send(filme)
})

module.exports = router;
