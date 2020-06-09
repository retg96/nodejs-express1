const mongoose = require('mongoose');

// const Schema= mongoose;
const {Schema}= mongoose;

//definimos un esquema para el usuario
const userSchema = new Schema({
    username: { type: String, required: true, unique: true, sparse:true},
    password: { type: String, required: true},
    email: { type: String, required: true, unique:true, sparse:true},
    data:{
        type:{age:Number, isMale:Boolean}
    },
    role:{type:String, enum:['admin','seller'], default: 'seller'}   
});

const model = mongoose.model('user', userSchema);
module.exports = model;