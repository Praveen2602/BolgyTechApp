
const jwt = require("jsonwebtoken")
const User = require("../models/Users/Users")
const isLoggedIn = (req, res, next) => {
    console.log("isLoggedIn Executed");

    // Check if the authorization header exists
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    // Split the authorization header to get the token
    const parts = req.headers.authorization?.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({ message: "Invalid authorization format" });
    }

    const token = parts[1];
    // Continue with token verification logic here
    // For example: 
    jwt.verify(token, "secretkey", async (err, decoded) => {
        if(err){
            return res.status(401).json({
                status:"Failed",
                message:err?.message
            })
        }else{
           const userId =decoded?.user?.id;
           const user = await User.findById(userId).select("username email role _id");
           req.userAuth = user;
           next()
        }
    });

    
};

module.exports = isLoggedIn;
