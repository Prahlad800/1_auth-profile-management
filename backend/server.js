import express from "express"
import dotenv from "dotenv"
import app from "./src/app.js"


import mongoose from "mongoose"
import { connectDB } from "./src/db/db.js"

dotenv.config()
const port = process.env.PORT

connectDB()

app.listen(port, ()=>{
   console.log(`Server running on port ${port}`)
})


