//importamos express js
const express = require('express')

//importamos routes desde el archivo index.js
const routes = require('./routes/index');

const app = express();

//llamamos la funcion routes
routes(app);

//le decimos al servidor en que puerto se ejecute
//ejecutamos la app de express
app.listen(4000,()=>{
    console.log('Corriendo en el puerto: 4000 ');
});

