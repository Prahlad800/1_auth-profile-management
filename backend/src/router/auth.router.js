import { Router } from "express";
import { signupValidation,loginValidation } from "../middleware/AuthValidation.js";
import {signup,login} from "../controllers/auth.controller.js"

const router=Router()
router.post("/signup",signupValidation,signup)
router.post("/login",loginValidation,login)
export default router
