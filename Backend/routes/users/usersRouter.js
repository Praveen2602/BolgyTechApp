const express = require('express') 
const {register , login ,getProfile} =require("../../controllers/users/usersController");

const userRouter = express.Router();

//!Register
userRouter.post("/api/v1/users/register",register);
//!Login
userRouter.post("/api/v1/users/login",login);
//!Profile
userRouter.get("/api/v1/users/profile/:id",getProfile);
module.exports = userRouter;