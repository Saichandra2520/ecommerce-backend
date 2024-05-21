const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://saichandra:*Sai12345@cluster0.k4vuyq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
