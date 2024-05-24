const mongoose = require('mongoose');

const Filmes = mongoose.model('Filmes', { 
    titulo: String,
    descricao: String,
    imagemURL: String,
    trailerURL: String
});

module.exports = Filmes;


const Caderno = mongoose.model('Caderno', { 
    nome: String,
    valor: Number,
    contato: String,
    data: String
});

module.exports = Caderno;