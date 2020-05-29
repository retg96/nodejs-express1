//importamos express js
const express = require('express');
const bodyParser = require('body-parser')

const routesV1= require('./routes/v1');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

routesV1(app);

//le decimos al servidor en que puerto se ejecute
//ejecutamos la app de express
app.listen(4000,()=>{
    console.log('Corriendo en el puerto: 4000 ');
});

