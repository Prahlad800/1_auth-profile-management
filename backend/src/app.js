import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import authrouter from "./router/auth.router.js"


const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello I am good")
})

app.use("/auth",authrouter)

export default app