const bcrypt = require('bcrypt');

const createUser = async(req, res)=>{
try {
    console.log('req.body', req.body);
    //guardamos este usuario en una bd
    //encriptamos la contraseña del usuario y la guardamos en una bd
    const hash = await bcrypt.hash(req.body.password, 15);
    console.log('FIN', hash)
    res.send({status: 'ok', message:'user created'});
    
} catch (error) {
    console.log(error);
    res.status(500).send({status: "ERROR", message: error.message});
}
};

const deleteUser =(req, res)=>{
    res.send({status: 'ok', message:'user deleted'});
};

const getUsers =(req,res)=>{
    res.send({status: 'ok', data:[]});
};

const updateUser=(req,res)=>{
    res.send({status: 'ok', message:'user update'});
};

//los importamos como objetos
module.exports={
    createUser,
    deleteUser,
    getUsers,
    updateUser
};