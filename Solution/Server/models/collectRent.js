const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


const collectSchema=new mongoose.Schema({
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

const Collect=new mongoose.model("collectDetail",collectSchema)

module.exports=Collect