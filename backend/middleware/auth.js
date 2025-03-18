import jwt from 'jsonwebtoken'

 const authMiddleware = async (req,res,next) =>{
    try{
        const token = req.cookies['auth_token']
        
        if(!token){
            res.status(400).json({message:"Not Authenticated"})
            return
        }
        const decoded =  jwt.verify(token,process.env.SECRET_KEY)
        req.userId = decoded._id
        next();
    }
    catch(error){
        res.status(401).json({message:"UnAuthorized"})
        return 

    }
}

export default authMiddleware;