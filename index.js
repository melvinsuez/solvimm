const express = require('express');
const bodyParser = require ('body-parser');
const path = require('path');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

const routers = require ('./routers');
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routers);

app.listen(3000, () => {
    console.log('servidor Iniciado');
});