const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://saivallakatla1973:Dj0wXtiwcWtLEf8M@cluster0.9xuv85x.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}