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
app.use('/api/v1/users',userRouter);
//?Setup of the global error handler
app.use((error , req, res, next)=>{
   const status = error?.status ? error.status :"failed"; 
   const message = error?.message;
   const stack = error?.stack
   res.status(500).json({status,message,stack});
})
const PORT = process.env.PORT || 9080;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})