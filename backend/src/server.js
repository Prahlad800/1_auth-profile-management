import express from "express"
import dotenv from "dotenv"
import app from "./app.js"


import mongoose from "mongoose"
import { connectDB } from "./db/db.js"

dotenv.config()
const port = process.env.PORT

app.listen(port, ()=>{
   console.log(`Server running on port ${port}`)
})


