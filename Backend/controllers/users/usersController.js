const bcrypt = require("bcryptjs")

//@desc register new user 
//@route POST /api/v1/users/register
//@access public
const User = require("../../models/Users/Users")
const generateToken = require("../../utils/generateToken")
const asyncHandler = require("express-async-handler");

exports.register = asyncHandler( async (req,res,next)=>{
    const {username, email , password } = req.body;
    const user = await User.findOne({username});
    if(user){
      throw  new Error("User already existed");
    }
    //!object or document that is going to store
    const newUser = new User({username,email,password});
    
    //!hashing password using bcrypt
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password,salt);
     
    await newUser.save();
    res.json({
      status:"success",
      message:"User  registered successfully",
      _id:newUser?.id,
      username:newUser?.username,
      email:newUser?.email,
      role:newUser?.role
    })
});
//@desc login new user 
//@route POST /api/v1/users/login
//@access public
exports.login = asyncHandler(async (req, res, next) => {
   const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Await the bcrypt.compare function to resolve the promise
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      throw new Error("Invalid credentials");
    }

    user.lastlogin = new Date();
    await user.save();

    res.json({
      status: "success",
      email: user.email,
      _id: user._id,
      username: user.username,
      role: user.role,
      token: generateToken(user),
    });
  
});


 //@desc PRofile view of user 
//@route POST /api/v1/users/profile
//@access private
exports.getProfile= asyncHandler(async (req,res,next)=>{
  // console.log("Rec",req.userAuth)
    const user = await User.findById(req.userAuth.id);
    res.json({
      status:"success",
      message:"profile fetched",
      user,
    })
  
});