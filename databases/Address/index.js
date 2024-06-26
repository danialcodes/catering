import { Addresses } from "@/models/address-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

const getAllAddresses = async () => {
    const addresses = await Addresses.find().lean();
    return replaceMongoIdInArray(addresses);
}
const createNewAddress = async (address) => {
    const newAddress = await Addresses.create(address);
    return newAddress;
}

export {
    getAllAddresses,
    createNewAddress
}