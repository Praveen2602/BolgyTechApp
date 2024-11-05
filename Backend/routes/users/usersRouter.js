const express = require('express') 
const {register , login} =require("../../controllers/users/usersController");

const userRouter = express.Router();

userRouter.post("/api/v1/users/register",register);
userRouter.post("/api/v1/users/login",login);

module.exports = userRouter;