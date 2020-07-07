const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const productsRoutes = require('./routes/products');

//settings

app.set('json spaces', 4);

//middleware

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes

app.use('/products',productsRoutes);

//static files



//start server
app.listen(3000, ()=>{
    console.log('Servidor Arriba');
});