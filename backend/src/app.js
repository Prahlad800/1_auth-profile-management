import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import authrouter from "./router/auth.router.js"
import productrouter from "./router/product.router.js"
import cookieParser from "cookie-parser"



const app = express()
app.use(bodyParser.json())
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(cookieParser());

app.get("/api/test", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "API working 🚀",
      data: {
        name: "Prahlad",
        work: "Web Developer"
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong ❌"
    });
  }
});

app.get("/",(req,res)=>{
    res.send("hello I am sarvar")
})

app.use("/api/auth",authrouter)
app.use("/api/pro",productrouter)

export default app