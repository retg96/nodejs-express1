const mongoose = require('mongoose');

const {Schema} = mongoose;

const productSchema= new Schema(
    {
    title:{type:String, required:true},
    desc:{type:String, required:true},
    price:{type:String, required:true},
    images: {type:[{type:String, required:true}], default:[]},
    usuario:{type:mongoose.Schema.Types.ObjectId, ref: 'user', required:true}

},
{
    timestamps:true
}
);

const model = mongoose.model('product', productSchema);

module.exports = model;

