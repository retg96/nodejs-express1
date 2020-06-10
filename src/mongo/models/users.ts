import {Schema, model, Document} from 'mongoose';


export interface IUser extends Document{
    username:string;
    password:string;
    email:string;
    data:{
        age:number;
        isMale:boolean;
    };
    role:string;
}

//definimos un esquema para el usuario
const userSchema: Schema= new Schema({
    username: { type: String, required: true, unique: true, sparse:true},
    password: { type: String, required: true},
    email: { type: String, required: true, unique:true, sparse:true},
    data:{
        type:{age:Number, isMale:Boolean}
    },
    role:{type:String, enum:['admin','seller'], default: 'seller'}   
});

// const model = mongoose.model('user', userSchema);
// module.exports = model;

export default model<IUser>('user', userSchema);