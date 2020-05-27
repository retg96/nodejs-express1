//importamos express js
const express = require('express')

//importacion parcial
const {info,error}=require("./modules/my-log");

//importamos de manera parcial countries
const {countries} = require("countries-list");

//creamos una app de express
const app = express();

//definimos la ruta por default con express
//definimos rutas de tipo get
app.get("/", function(request, response){
    response.status(200).send("Hello");
});

app.get("/info", function(request,response){
    info("Hola Info");
    response.send("info");
});


//definimos la pagina para el error 404
app.get("*", function(request, response){
    response.status(404).send("NOT FOUND");
});





//utilizamos el modulo http para crear un servidor
// var servidor =  http.createServer(function(pathname, response) {

//     var parsed = url.parse(pathname.url);
//     console.log("parsed: ", parsed);

//     var pathname = parsed.pathname;
//     var query = querystring.parse(parsed.query); 
//     console.log("query", query);

//     //filtramos paginas en el servidor

//     if(pathname ==="/"){
//         response.writeHead(200,{'Content-Type': 'text/html'});
//         response.write('<html><body><p>HomePage</p></body></html>');
//         response.end();
//     }else if(pathname ==="/exit"){
//         response.writeHead(200,{'Content-Type': 'text/html'});
//         response.write('<html><body><p>Bye</p></body></html>');
//         response.end();
//     }else if(pathname ==="/info"){
//         var result = info(pathname);
//         response.writeHead(200,{'Content-Type': 'text/html'});
//         response.write(result);
//         response.end();
//     }
//     else if(pathname ==="/error"){
//         var result = error(pathname);
//         response.writeHead(200,{'Content-Type': 'text/html'});
//         response.write(result);
//         response.end();
//     }else if(pathname ==="/country"){
//         response.writeHead(200,{'Content-Type': 'application/json'});
//         response.write(JSON.stringify(countries[query.code])); //necesitamos poner un string en el write y como countries-list regresa objetos json con el JSON.stringify convertimos ese json en string
//         response.end();
//     }else{

//         response.writeHead(400,{'Content-Type': 'text/html'});
//         response.write('<html><body><p>Not Found</p></body></html>');
//         response.end();
//     }
    
// });

//le decimos al servidor en que puerto se ejecute

//ejecutamos la app de express
app.listen(4000, function(){
    console.log('Corriendo en el puerto: 4000 ');
});

