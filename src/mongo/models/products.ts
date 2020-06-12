import {Document, model, Schema} from 'mongoose';
import {IUser} from './users';

export interface IProduct extends Document{
    title: string;
    desc: string;
    price: number;
    images: string[];
    usuario: IUser | string;
}

const productSchema: Schema= new Schema(
    {
    title:{type:String, required:true},
    desc:{type:String, required:true},
    price:{type:String, required:true},
    images: {type:[{type:String, required:true}], default:[]},
    usuario:{type:Schema.Types.ObjectId, ref: 'user', required:true}

},
{
    timestamps:true
}
);

export default model<IProduct>('product', productSchema);


