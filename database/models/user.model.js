import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        minLength: [2, "name is too short"],
        maxLength: [50, "name is too long"],
    },   
    last_name: {
        type: String,
        required: true,
        minLength: [2, "name is too short"],
        maxLength: [50, "name is too long"],
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 60,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    }
},{timestamps:true})
export const userModel=mongoose.model("user", userSchema)