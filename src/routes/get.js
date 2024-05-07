const express = require('express');
const router = express.Router();
const Filmes = require('../models/db_models');

router.get("/", async (req, res) => {
    const filmes = await Filmes.find()
    return res.send(filmes);
});

router.get("/:id", async (req, res) => {
    const filme = await Filmes.findById(req.params.id)
    return res.send(filme);
});

module.exports = router;
