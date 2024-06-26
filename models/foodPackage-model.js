import mongoose, { Schema } from "mongoose";

const foodPackageSchema = new Schema({
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'foodItems',
        required: true
    }],
    price: {
        required: true,
        type: Number
    }
});

export const foodPackages = mongoose.models.foodPackages ?? mongoose.model("foodPackages", foodPackageSchema);