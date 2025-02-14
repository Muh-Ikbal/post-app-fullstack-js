const {PrismaClient} = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
require("dotenv").config();
exports.login = async(req,res)=>{
  // console.log(req.params)
  // console.log(req.body)
 const {email,password} = req.body;
 try{
  console.log(email)
  const user = await prisma.user.findUnique({where:{ email:email }});
 if(!user){
  return res.status(401).json({message:'email atau password tidak valid'})
 }

 const isMatch = await bcrypt.compare(password,user.password);

 if(!isMatch){
  return res.status(401).json({message:'email.password tidak valid'})
 }
 const token = jwt.sign({id:user.id,email:user.email}, process.env.JWT_SECRET,{expiresIn:'1h'})

 res.status(200).json({message:'login berhasil',token:token})
 }catch(error){
    res.status(500).json({success:false,message:'internal server error:'+error})
 }
 
}