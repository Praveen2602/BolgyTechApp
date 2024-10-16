//@desc register new user 
//@route POST /api/v1/users/register
//@access public
exports.register = async (req,res)=>{
    res.json({message:"user register controller executed"})
}