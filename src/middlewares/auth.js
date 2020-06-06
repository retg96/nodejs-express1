const jwt = require('jsonwebtoken');

const isValidHostname = (req, res, next)=>{
    //para varios hosts
    const validHosts =('dina.ec', 'localhost');
    if(validHosts.includes(req.hostname)){
        next();
    }else{
        res.status(403).send({status: 'ACCES_DENIED'});
    }
   
};

const isAuth = (req, res, next)=>{
    try {
        const{token} = req.headers;
        if(token){
        jwt.verify(token, process.env.JWT_SECRET);
        next(); 
    }else{
        throw{
            code: 403,
            status: "ACCESS_DENIED",
            message: 'Missing header token'
        }
        
    }
    } catch (e) {
        res
            .status(e.code || 500)
            .send({status: e.status || 'ERROR', message: e.message});
    }
      
};

module.exports = {isAuth, isValidHostname};