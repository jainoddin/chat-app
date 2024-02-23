import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie =(userId,res)=>{
    const token =jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

    res.cookie("jwt",token,{
        max:15*24*60*60*1000,//ms
        httponly:true,//prevent xss attack cross-site sc attacks
        sameSite:"strict",//csrf attack cross-site request 
        secure:process.env.NODE_ENV !=="developement"
    })
}
export default generateTokenAndSetCookie;