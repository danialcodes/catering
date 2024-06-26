import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        required:true,
        type:String
    },
    phoneNumber:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    role:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    }

});

export const Users = mongoose.models.Users ?? mongoose.model("Users",userSchema);