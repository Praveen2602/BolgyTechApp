const express = require('express');
const dotenv = require('dotenv');
//!creating an express server
const app = express();
//! loading the environment variables
dotenv.config();
const PORT = process.env.PORT || 9080;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})