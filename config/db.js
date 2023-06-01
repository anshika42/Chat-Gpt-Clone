const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,
            useUnifiedTopology: true });
        console.log(`Database Connected ${mongoose.connection.host}`.bgGreen.white);
    }
    catch(error){
        console.log(`MongoDB Error : ${error}`.bgRed.white);
    }

}

module.exports = connectDB