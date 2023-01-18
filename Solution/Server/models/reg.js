const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    passsword:{
        type:String,
        required:true
    }
})

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        // const passwordHash=await bcrypt.hash(password,12)
        console.log(`the password is ${this.password}`);
        this.passsword=await bcrypt.hash(this.password,12)
        console.log(`the password is ${this.password}`);
        // this.confirm_password=await bcrypt.hash(this.confirm_password,12)
        // console.log(`the confirm password is ${this.password}`);
    }
    next()
})

const Register=new mongoose.model("userDetail",userSchema)

module.exports=Register