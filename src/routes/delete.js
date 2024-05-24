const express = require('express');
const router = express.Router();
const Caderno = require('../models/db_models');

router.delete("/id/:id", async (req, res) => {
    try {
        const caderno = await Caderno.findByIdAndDelete(req.params.id);
        if (!caderno) {
            return res.status(404).send({ message: "Dados não encontrados" });
        }
        return res.send({ message: "Dados deletados com sucesso!", caderno });
    } catch (error) {
        return res.status(500).send({ message: "Erro ao deletar o dados", error });
    }
});

module.exports = router;
