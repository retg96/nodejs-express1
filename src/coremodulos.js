//importamos express js
const express = require('express')

//importacion parcial
const {info,error}=require("./modules/my-log");

//importamos de manera parcial countries
const {countries,languages} = require("countries-list");

//creamos una app de express
const app = express();

//definimos la ruta por default con express
//definimos rutas de tipo get
// app.get("/", function(request, response){
//     response.status(200).send("Hello");
// });

//funcion flecha
app.get("/",(request, response)=>{
    response.status(200).send("Hello");
});


// app.get("/info", function(request,response){
//     info("Hola Info");
//     response.send("info");
// });

//funcion flecha
app.get("/info",(request,response)=>{
    info("Hola Info");
    response.send("info");
});

//querys params
app.get("/country",(request,response)=>{
    console.log('request.query', request.query);
    // response.send(JSON.stringify(countries[request.query.code]));

    //le man damos un json como respuesta al cliente
    response.json(countries[request.query.code]);
});

//Alterntiva a query params
app.get("/languages/:lang",(request,response)=>{
    console.log('request.params', request.params);
    const lang = languages[request.params.lang];
    // response.send(JSON.stringify(countries[request.query.code]));

    //si existe lang
    if(lang){
        response.json({status: 'OK', data: lang});
        // response.json(lang); 
    }//sino existe
    else{
        response
        .status(404)
        .json({
            status: 'Not Found',
            message: `language ${request.params.lang} not found`
            // message: 'language' + request.params.lang + 'not found'
        });
    }

});


//Alterntiva a query params
// app.get("/languages/:lang/:countryCode",(request,response)=>{
//     console.log('request.params', request.params);
//     const lang = languages[request.params.lang];
//     // response.send(JSON.stringify(countries[request.query.code]));

//     //si existe lang
//     if(lang){
//         response.json({status: 'OK', data: lang});
//         // response.json(lang); 
//     }//sino existe
//     else{
//         response
//         .status(404)
//         .json({
//             status: 'Not Found',
//             message: `language ${request.params.lang} not found`
//             // message: 'language' + request.params.lang + 'not found'
//         });
//     }

// });


//definimos la pagina para el error 404
// app.get("*", function(request, response){
//     response.status(404).send("NOT FOUND");
// });

//funcion flecha
app.get("*",(request, response)=>{
    response.status(404).send("NOT FOUND");
});


//le decimos al servidor en que puerto se ejecute

//ejecutamos la app de express
app.listen(4000,()=>{
    console.log('Corriendo en el puerto: 4000 ');
});

