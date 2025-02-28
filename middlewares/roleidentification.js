export const admin=(req,res,next)=>{
    if(req.userRole !=="admin"){
        return res.status(403).json({message:"access denied concact admin please!"})
    }
    next();
};
