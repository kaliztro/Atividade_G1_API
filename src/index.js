const config = require('./config/config.json');
const express = require('express');
const app = express();
app.use(express.json());

const port = 3000

const mongoose = require('mongoose');

mongoose.connect(config.dataBase)
  .then(() => console.log('Banco de dados conectado!'));



const Filmes = mongoose.model('Filmes', { 
    titulo: String,
    descricao: String,
    imagemURL: String,
    trailerURL: String
});


app.get("/", async (req, res) => {
    const filmes = await Filmes.find()
    return res.send(filmes);
});

app.post("/", async (req, res) => {
    const filme = new Filmes({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        imagemURL: req.body.imagemURL,
        trailerURL: req.body.trailerURL,
    })

    await filme.save()
    return res.send(filme)
});

app.delete("/:id", async (req, res) => {
    const filme = await Filmes.findByIdAndDelete(req.params.id)
    return res.send(filme)
})

app.put("/:id", async (req, res) => {
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

app.get("/:id", async (req, res) => {
    const filme = await Filmes.findById(req.params.id)
    return res.send(filme);
});

app.listen(port, () => {
    console.log('API está sendo executada!');
});
