import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema({
    mealType: {
        required: true,
        type: String,
        enum: ["breakfast", "lunch", "dinner"]
    },
    day: {
        required: true,
        type: String,
        enum: ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"]

    },
    date: {
        required: true,
        type: Date,
    },
    packageId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'foodPackages'
    },
    price: {
        required: true,
        type: Number
    }

});

// saving the price of the menu from the food package before saving the menu
menuSchema.pre('save', async function (next) {
    const menu = this;
    const packageId = menu.packageId;
    const foodPackage = await mongoose.models.foodPackages.findById(packageId);
    menu.price = foodPackage.price;
    next();
});

export const Menus = mongoose.models.Menus ?? mongoose.model("Menus", menuSchema);