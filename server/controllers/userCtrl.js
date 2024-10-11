const user = require('../model/user')
const bcryptjs =require('bcryptjs')

const Login= async(req,res)=>{
    const body= req.body
    
    const findUser=await user.findOne({email:body.email})
    const comparePassword =await bcryptjs.compare(body.password, findUser.password)
    if(!comparePassword){
        return res.status(401).json({errorMessage:'invalid Password'})
    }
    res.send({message:'sucess', data:findUser})
}

const Register = async(req, res)=>{
    const body = req.body
    const hashedpassword = await bcryptjs.hash(req.body.password, 10)
    const saveData =await user.create({
        name: body.name,
        email: body.email,
        password:hashedpassword//saves in hashed password
    })//saves in mongose database
    res.send({message:'sucess', data:saveData})
}

module.exports={
    Login,
    Register
}