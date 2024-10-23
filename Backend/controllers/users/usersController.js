//@desc register new user 
//@route POST /api/v1/users/register
//@access public
const User = require("../../models/Users/Users")

exports.register = async (req,res)=>{
    try{
      const {username, email , password } = req.body;
      const user = await User.findOne({username});
      if(user){
        throw  new Error("User already existed");
      }
      //!object or document that is going to store
      const newUser = new User({username,email,password});
      await newUser.save();
      res.json({
        status:"success",
        message:"User  registered successfully",
        _id:newUser?.id,
        username:newUser?.username,
        email:newUser?.email,
        role:newUser?.role
      })
    }
    catch(error){
     res.json({status:"Failed", message:error?.message});
    }
}