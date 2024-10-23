const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/bloggytech");
    console.log("Connected successfully");
    }
    catch (error){
        console.log("Connection failed",error.message);
    }

};

module.exports = connectDB;
