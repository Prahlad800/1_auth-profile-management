import express from "express"

const app = express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello I am good")
})

export default app