 var http =require('http') //importamos el modulo en una variable o constante
 //var http 
// el http me permite ejecutar javascript del lado dels ervidor

//importamos las funciones de manera global del modulo my-log-js
// var funciones = require("./modules/my-log");

//importacion parcial
var {info,error}=require("./modules/my-log");

//importamos el archivo o modulo consts.js
var consts =require("./utils/consts");

//importamos el archivo firebase.js
var fb = require('../libs/firebase');

//importamos de manera parcial countries
var {countries} = require("countries-list");

//modulos que vienen en la install de ndoe js que son d etipo core moduls
var url = require("url");
var querystring = require("querystring");

//utilizamos el modulo http para crear un servidor
var servidor =  http.createServer(function(pathname, response) {

    var parsed = url.parse(pathname.url);
    console.log("parsed: ", parsed);

    var pathname = parsed.pathname;
    var query = querystring.parse(parsed.query); 
    console.log("query", query);

    //filtramos paginas en el servidor

    if(pathname ==="/"){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write('<html><body><p>HomePage</p></body></html>');
        response.end();
    }else if(pathname ==="/exit"){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write('<html><body><p>Bye</p></body></html>');
        response.end();
    }else if(pathname ==="/info"){
        var result = info(pathname);
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(result);
        response.end();
    }
    else if(pathname ==="/error"){
        var result = error(pathname);
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(result);
        response.end();
    }else if(pathname ==="/country"){
        response.writeHead(200,{'Content-Type': 'application/json'});
        response.write(JSON.stringify(countries[query.code])); //necesitamos poner un string en el write y como countries-list regresa objetos json con el JSON.stringify convertimos ese json en string
        response.end();
    }else{

        response.writeHead(400,{'Content-Type': 'text/html'});
        response.write('<html><body><p>Not Found</p></body></html>');
        response.end();
    }

    // if(pathname ==="/"){
    //     response.writeHead(200,{'Content-Type': 'text/html'});
    //     response.write('<html><body><p>HomePage</p></body></html>');
    //     response.end();
    // }else if(pathname ==="/exit"){
    //     response.writeHead(200,{'Content-Type': 'text/html'});
    //     response.write('<html><body><p>Bye</p></body></html>');
    //     response.end();
    // }else if(pathname ==="/info"){
    //     var result = info.info(pathname);
    //     response.writeHead(200,{'Content-Type': 'text/html'});
    //     response.write(result);
    //     response.end();
    // }
    // else if(pathname ==="/error"){
    //     var result = error.error(pathname);
    //     response.writeHead(200,{'Content-Type': 'text/html'});
    //     response.write(result);
    //     response.end();
    // }else{

    //     response.writeHead(400,{'Content-Type': 'text/html'});
    //     response.write('<html><body><p>Not Found</p></body></html>');
    //     response.end();
    // }

    //en el param request podemos obtener alguna informacion importante sobre la conexion entrante
    //response: se utiliza para enviarle la respuesta al cliente.

    //aqui le decimos el mensaje que le queremos enviar al cliente
    // response.writeHead(200,{'Content-Type': 'text/html'}) 
    //200: todo fue correcto
    
    //aqui escribimos el mensaje que queremos enviar
    // response.write('<html><body><p>Hello</p></body></html>');
    // response.end();

    
});

//le decimos al servidor en que puerto se ejecute
servidor.listen(4000);
console.log('Corriendo en el puerto: 4000 ')