//importamos de manera parcial countries
const {countries,languages} = require("countries-list");

//creamos una nueva const la cual recibira como parametro mi app express
const routes = app =>{
    app.get("/",(request, response)=>{
        response.status(200).send("Hello");
    });

    app.get("/info",(request,response)=>{
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

    app.get("*",(request, response)=>{
        response.status(404).send("NOT FOUND");
    });

};

//luego exportamos routes
module.exports = routes;