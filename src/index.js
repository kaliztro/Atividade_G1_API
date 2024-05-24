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

app.use((req, res, next) => {
    const auth = { login: config.user, password: config.password }

    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    // Verifique se o login e a senha estão corretos
    if (login && password && login === auth.login && password === auth.password) {
        // Acesso concedido...
        return next()
    }

    // Acesso negado...
    res.status(401).send('Autenticação necessária.')
});

app.use('/', getRoutes);
app.use('/', postRoutes);
app.use('/', putRoutes);
app.use('/', deleteRoutes);

app.listen(port, () => {
    console.log(`API está sendo executada na porta ${port}!`);
});
