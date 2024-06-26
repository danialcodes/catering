import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema({
    buildingName: {
        type: String,
        default: "No Name Provided",
    },
    holdingNumber: {
        type: String,
        required: true,
    },
    buildingImageUrl: {
        type: String,
        default: "No Image Provided",
    },
    streetName: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    flats: [{
        flatNumber: {
            type: String,
            required: true,
        },
        floor:{
            type: String,
            required: true,
        },
    }],
    googleMapLink: {
        type: String,
        required: true,
    },
    emergencyContact: {
        type: String,
        required: true,
    },
});

export const Addresses = mongoose.models.Addresses ?? mongoose.model("Addresses", addressSchema);