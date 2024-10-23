const express = require('express');
const dotenv = require('dotenv');
const userRouter =require('./routes/users/usersRouter')
const connectDB = require("./config/connectDb")

//!creating an express server
const app = express();
//! loading the environment variables
dotenv.config();
//!Establishing connection  to Mongodb
connectDB();
//!set up middleware for route 
app.use(express.json());
//? setting router
app.use('/',userRouter);
const PORT = process.env.PORT || 9080;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})