const bcrypt = require('bcrypt');
const user = require('../../mongo/models/users');
const jwt = require('jsonwebtoken');
const Products= require('../../mongo/models/products');

//tiempo de expiracion del token
const expiresIn = 60*10;

//autenticacion de usuario
const login = async(req,res)=>{
    try {
        const {email, password}= req.body;
        const user1 = await user.findOne({email});
        if(user1){
            const isOk= await bcrypt.compare(password, user1.password);
            if(isOk){
                const token = jwt.sign({
                  userId: user1._id,
                  role: user1.role  
                },
                    process.env.JWT_SECRET,
                    {expiresIn}
                );
                res.send({
                    status: 'OK', data: {
                        token,
                        expiresIn
                    }
                });
            }else{
                res.status(403).send({status: 'INVALID_PASSWORD', message:''});
            }
            }else{
                res.status(401).send({status: 'USER_NOT_FOUND', message:''});
            }
    } catch (e) {
        res.status(500).send({status:'ERROR', message: e.message})
    }
};

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

const deleteUser = async(req, res)=>{
    try {
        const {userId}= req.body;
        if(!userId){
            throw new Error('missing param userId');
        }
        await user.findByIdAndDelete(userId);
        await Products.deleteMany({usuario:userId});

        res.send({status:'OK', message: 'USER DELETED'});
    } catch (e) {
        res.status(500).send({status:'ERROR', message: e.message});
    }
};

const getUsers =(req,res)=>{
    res.send({status: 'ok', data:[]});
};

const updateUser= async(req,res)=>{
   try {
       console.log('req.sessionData', req.sessionData.userId);
       const {username,email,data}= req.body;
    //    const {username,email,data,userId}= req.body;
       await user.findByIdAndUpdate(req.sessionData.userId,{
           username,
           email,
           data
       });
    //    await user.findByIdAndUpdate(userId,{
    //     username,
    //     email,
    //     data
    // });
       res.send({status: 'OK', message: 'user updated'});
   } catch (error) {
       if(error.code && error.code ===11000){
           res
                .status(400)
                .send({status: 'DUPLICATED_VALUES', message: error.keyValue});
                return;
       }
       res.status(500).send({status:'ERROR', message:'user updated'});
   }
};

//los importamos como objetos
module.exports={
    createUser,
    deleteUser,
    getUsers,
    updateUser,
    login
};