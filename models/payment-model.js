import mongoose,{Schema} from "mongoose";

const paymentSchema = new Schema({
    userId:{
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    amount:{
        required:true,
        type:Number
    },
    paymentDate:{
        required:true,
        type:Date
    },
    paymentMethod:{
        required:true,
        type:String
    },

});

export const Payments = mongoose.models.Payments ?? mongoose.model("Payments",paymentSchema);