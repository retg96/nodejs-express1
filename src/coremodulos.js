//importamos express js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');

dotenv.config({ path: 'src/.env'});


const routesV1= require('./routes/v1');

const app = express();

//otras alternativas
// const MONGO2= process.env.MONGO || `mongodb+srv://test1-nodejs:<password>@curso-node-js-lwncf.gcp.mongodb.net/test?retryWrites=true&w=majority`;
// process.env.MONGO= process.env.MONGO || `mongodb+srv://test1-nodejs:<password>@curso-node-js-lwncf.gcp.mongodb.net/test?retryWrites=true&w=majority`;

// console.log('MONGO', process.env.MONGO);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

routesV1(app);


const PORT = process.env.PORT || 4000;


mongoose
    .connect('mongodb+srv://dbRetg:Teran2016@cluster-node-js-wqtlw.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    })
    .then(()=>{
        console.log('Connected to mongodb');
            app.listen(PORT,()=>{
            console.log(`Running on ${PORT}`);
    });
})
.catch(error=>{
    console.log('mongodb error', error);
});

//otras alternativas
// const PORT = process.env.PORT || 4000;
// process.env.PORT= process.env.PORT || 4000;
// app.listen(process.env.PORT,()=>{
//     console.log('Running on: ', process.env.PORT);
// });

//otras alternativas
//le decimos al servidor en que puerto se ejecute
//ejecutamos la app de express
// app.listen(4000,()=>{
//     console.log('Corriendo en el puerto: 4000 ');
// });




