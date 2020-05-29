//importamos express js
const express = require('express');

const routesV1= require('./routes/v1');

const app = express();

routesV1(app);

//le decimos al servidor en que puerto se ejecute
//ejecutamos la app de express
app.listen(4000,()=>{
    console.log('Corriendo en el puerto: 4000 ');
});

