import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    number: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    DOB: {
        type: Date
    }
}, { timestamps: true })
export const User = mongoose.model("User", userSchema)