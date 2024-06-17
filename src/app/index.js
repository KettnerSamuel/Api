const express = require('express');
const cons = require('consolidate');

const app = express();
app.engine('html', cons.ejs);

app.set('views', './app/views');

app.use(express.urlencoded({
    extended: false
}));

app.use(express.static('./views/www'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.use('/', require('./routers/allRouter.js'));

module.exports = app;
