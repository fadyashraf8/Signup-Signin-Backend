import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect("mongodb+srv://fady:fadyashraf2002@cluster0.uttgoxc.mongodb.net/Signup-Signin-Backend").then(()=>{
    console.log("system is working");
}).catch((err)=>{
    console.log("system failed",err);
})
}

