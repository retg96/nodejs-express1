const createUser =(req, res)=>{
    res.send({status: 'ok', message:'user created'});
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