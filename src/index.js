const config = require('../src/config/config.json');
const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${config.user}:${config.password}@api.9rb5l3l.mongodb.net/?retryWrites=true&w=majority&appName=API`)
    .then(() => console.log('Banco de dados conectado!'));

    const getRoutes = require('./routes/get');
    const postRoutes = require('./routes/post');
    const putRoutes = require('./routes/put');
    const deleteRoutes = require('./routes/delete');
    
    app.use('/', getRoutes);
    app.use('/', postRoutes);
    app.use('/', putRoutes);
    app.use('/', deleteRoutes);

app.listen(port, () => {
    console.log(`API está sendo executada na porta ${port}!`);
});
