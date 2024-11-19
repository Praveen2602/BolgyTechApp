const globalErrorHandler = (error , req, res, next)=>{
    const status = error?.status ? error.status :"failed"; 
    const message = error?.message;
    const stack = error?.stack
    res.status(500).json({status,message,stack});
 } ;

 const notFound = (req,res,next)=>{
    let error = new Error(
        `Cannot find the Route for${req.originalUrl} at the server`
    );
    next(error);
}
module.exports = {globalErrorHandler , notFound}