import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    userId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },

    orderedItems: [{
        menuId: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'Menus'
        },
        quantity: {
            required: true,
            type: Number
        },
        itemStatus: {
            required: true,
            type: String,
            enum: ['pending', 'confirmed', 'delivered']
        }
    }],
    orderDate: {
        required: true,
        type: Date
    },
    orderStatus: {
        required: true,
        type: String,
        enum: ['completed', 'processing', 'initiated', 'cancelled']
    },
    totalPrice: {
        required: true,
        type: Number
    }

});

orderSchema.pre('save', async function (next) {
    const order = this;

    let total = 0;
    for (let menuItem of order.orderedItems) {
        const menu = await mongoose.models.Menus.findById(menuItem.menuId);
        if (!menu) {
            throw new Error("Menu not found");
        }

        total += menu.price * menuItem.quantity;
    }
    order.totalPrice = total;
    next();
});

export const Orders = mongoose.models.Orders ?? mongoose.model("Orders", orderSchema);