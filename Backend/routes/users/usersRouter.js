const express = require('express') 
const {register} =require("../../controllers/users/usersController");

const userRouter = express.Router();

userRouter.post("/api/v1/users/register",register);

module.exports = userRouter;