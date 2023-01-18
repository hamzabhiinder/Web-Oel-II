const mongoose=require("mongoose")
const DB="mongodb://localhost:27017/OEL"

mongoose.set('strictQuery',true)
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("Connection Successful")
}).catch((e)=>{
    console.log("no connection")
})