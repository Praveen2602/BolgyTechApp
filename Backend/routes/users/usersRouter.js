const express = require('express') 
const {register , login ,getProfile} =require("../../controllers/users/usersController");
const isLoggedIn = require('../../middlewares/isLoggedIn');

const userRouter = express.Router();

//!Register Route
userRouter.post("/register",register);
//!Login Route
userRouter.post("/login",login);
//!Profile
userRouter.get("/profile",isLoggedIn,getProfile);
module.exports = userRouter;