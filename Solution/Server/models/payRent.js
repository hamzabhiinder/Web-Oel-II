const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


const PaySchema=new mongoose.Schema({
    customer:{
        type:String,
        required:true,
        unique:true
    },
    item:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const Pay=new mongoose.model("rentDetail",PaySchema)

module.exports=Pay