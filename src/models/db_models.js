const mongoose = require('mongoose');

const Filmes = mongoose.model('Filmes', { 
    titulo: String,
    descricao: String,
    imagemURL: String,
    trailerURL: String
});

module.exports = Filmes;
