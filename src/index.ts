//importamos express
import express, {Application} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routesV1 from './routes/v1';

dotenv.config({ path: 'src/.env'});

declare global{
    namespace Express{
        export interface Request{
            sessionData:any;
        }
    }
}



// const routesV1= require('./routes/v1');

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routesV1(app);


const PORT: number | string = process.env.PORT || 4000;


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




