import bodyParser from "body-parser";
import { User } from "../models/user.models.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
    try {
        const { name, email, DOB, password, number } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400)
                .json({
                    message: "user is already exist,you can login",
                    success: false
                })
        }
        const userModel = new User({ name, email, DOB, password, number })
        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save();
        res.status(500)
            .json({
                message: "Signup successfully",
                success: true
            })

    } catch (err) {
        res.status(201)
            .json({
                message: `Internal server errer ${err}`,
                success: false
            })

    }

}
export const login = async (req, res) => {
    try {
        const { email, password, } = req.body;
        const user = await User.findOne({ email })
        const errerMsg = "Auth failed email or password in wrong"
        if (!user) {
            return res.status(403)
                .json({
                    message: errerMsg,
                    success: false
                })
        }
        // const userModel=new User({name,email,DOB,password,number})
        // userModel.password = await bcrypt.hash(password,10)
        // await userModel.save();

        const inPassEqual = await bcrypt.compare(password, user.password);
        if (!inPassEqual) {
            return res.status(403).json({
                message: "Password is wrong",
                success: false
            })
        }
        // jwt toket 
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT,
            { expiresIn: '24h' }
        )

          res.cookie("token", jwtToken, {
            httpOnly: true,
            secure: false, // production me true
            maxAge: 24 * 60 * 60 * 1000
        });



        res.status(200).json({
            message:"Login success",
            success:true,
            jwtToken,
            email:user.email,
            name:user.name,
            DOB:user.DOB,
            number:user.number
        })
    } catch (err) {
        res.status(201)
            .json({
                message: `Internal server errer ${err}`,
                success: false
            })

    }

}