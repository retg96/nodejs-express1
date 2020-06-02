const bcrypt = require('bcrypt');
const user = require('../../mongo/models/users');

const createUser = async(req, res)=>{
try {
    console.log('req.body', req.body);
    //guardamos este usuario en una bd
    //encriptamos la contraseña del usuario y la guardamos en una bd
    
    const {username, email,password,data}=req.body;
    const hash = await bcrypt.hash(req.body.password, 15);

    // await user.create({
    //     username,
    //     email,
    //     data,
    //     password: hash
    // });
    // console.log('FIN', hash)

    //segunda manera de guardar registros en la db
    const Users = new user();
    Users.username = username;
    Users.email = email;
    Users.password= hash;
    Users.data = data;

    await Users.save();


    res.send({status: 'ok', message:'user created'});
} catch (error) {
    if(error.code && error.code ===11000){
        res
            .status(400)
            .send({status: 'DUPLICATED_VALUES', message: error.keyValue});
        return;
    }
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