import mongoose,{Schema} from "mongoose";

const foodItemSchema = new Schema({
    name:{
        required:true,
        type:String
    },
    imageUrl:{
        required:false,
        type:String,
        default:""
    },
    itemType:{
        required:true,
        type:String,
        enum:["rice","fish","meat","vegetables","salad"]
    },
    quantity:{
        required:true,
        type:Number
    },
    price:{
        required:true,
        type:Number
    },

});

export const foodItems = mongoose.models.foodItems ?? mongoose.model("foodItems",foodItemSchema);