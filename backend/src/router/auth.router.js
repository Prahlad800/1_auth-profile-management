import { Router } from "express";
import { signupValidation,loginValidation } from "../middleware/AuthValidation.js";
import {signup} from "../controllers/auth.controller.js"

const router=Router()
router.post("/signup",signupValidation,signup)
router.post("/login",(req,ras)=>{
    res.send("login page")
})
export default router
