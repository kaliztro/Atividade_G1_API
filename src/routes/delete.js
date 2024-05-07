const express = require('express');
const router = express.Router();
const Filmes = require('../models/db_models');

router.post("/:id", async (req, res) => {
    const filme = await Filmes.findByIdAndDelete(req.params.id)
    return res.send(filme)
});

module.exports = router;
