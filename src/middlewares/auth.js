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
        const data = jwt.verify(token, process.env.JWT_SECRET);
        console.log('jwt data', data);

        // if(data.userId != req.body.userId && data.role !='admin'){
        //     throw{
        //         code: 403,
        //         status: "ACCESS_DENIED",
        //         message: 'Missing Permission or invalid role'
        //     };
            
        // }
        req.sessionData = {userId: data.userId};
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