import bodyParser from "body-parser";
import { User } from "../models/user.models.js";
import bcrypt from "bcrypt"
export const signup = async (req,res)=>{
    try{
        const {name,email,DOB,password,number}=req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400)
            .json({
                message:"user is already exist,you can login",
                success:false
            })
        }
        const userModel=new User({name,email,DOB,password,number})
        userModel.password = await bcrypt.hash(password,10)
        await userModel.save();
        res.status(500)
        .json({
            message:"Signup successfully",
            success:true
        })

    }catch(err){
        res.status(201)
        .json({
            message:"Internal server errer",
            success:false
        })

    }

}