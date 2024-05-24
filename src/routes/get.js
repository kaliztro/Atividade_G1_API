const express = require('express');
const router = express.Router();
const Caderno = require('../models/db_models');

//? Rota para buscar todos
router.get("/", async (req, res) => {
    try {
        const cadernos = await Caderno.find();
        if (!cadernos.length) {
            return res.status(404).send({ message: "Devedores não encontrado" });
        }
        return res.send(cadernos);
    } catch (error) {
        return res.status(500).send({ message: "Erro ao buscar no caderno", error });
    }
});

//? Rota para buscar pelo nome
router.get("/nome/:nome", async (req, res) => {
    try {
        const caderno = await Caderno.find({ nome: req.params.nome }); //Caderno.find retorna todos os dados com o mesmo nome  //  Caderno.findOne retorna apenas um 
        if (!caderno) {
            return res.status(404).send({ message: "Nome não encontrado" });
        }
        return res.send(caderno);
    } catch (error) {
        return res.status(500).send({ message: "Erro ao buscar no caderno", error });
    }
});

//? Rota para buscar pelo ID
router.get("/id/:id", async (req, res) => {
    try {
        const caderno = await Caderno.findById(req.params.id);
        if (!caderno) {
            return res.status(404).send({ message: "ID não encontrado" });
        }
        return res.send(caderno);
    } catch (error) {
        return res.status(500).send({ message: "Erro ao buscar no caderno", error });
    }
});

module.exports = router;
