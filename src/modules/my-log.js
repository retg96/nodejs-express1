// function info(text) {
//     console.log("INFO",text);
//     return text;
// }

// function error(text) {
//     console.log("Error",text);
//     return text;
// }

//exportamos nuestras funciones
//module.exports={info,error}; //esto es una exportacion global
/////////////////////////////////////////////////////////////////////////////////////////

//Exportaciones parciales1
// module.exports.info=function info(text) {
//     console.log("INFO",text);
//     return text;
// }

// module.exports.error=function error(text) {
//     console.log("Error",text);
//     return text;
// }

//Exportaciones parciales 2

function info(text) {
    console.log("INFO",text);
    return text;
}

function error(text) {
    console.log("Error",text);
    return text;
}

module.exports.info = info;
module.exports.error = error;