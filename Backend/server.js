const express = require('express');
const dotenv = require('dotenv');
const userRouter =require('./routes/users/usersRouter')
const connectDB = require("./config/connectDb");
const { notFound, globalErrorHandler } = require('./middlewares/globalErrorHandler');
const categoriesRouter = require('./routes/categories/categoriesRouter');

//!creating an express server
const app = express();
//! loading the environment variables
dotenv.config();
//!Establishing connection  to Mongodb
connectDB();
//!set up middleware for route 
app.use(express.json());
//? setting User router
app.use('/api/v1/users',userRouter);
//?Setting Category Router
app.use("/api/v1/categories",categoriesRouter);
//?not found error handler
app.use(notFound)
//?Setup of the global error handler
app.use(globalErrorHandler); 
const PORT = process.env.PORT || 9080;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})