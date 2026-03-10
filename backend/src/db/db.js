import mongoose from "mongoose"

export const connectDB = ()=>{
    const url = process.env.DATABABE_URL
    mongoose.connect(url)
    .then(()=>{
        console.log("mongoDB is connected... ✅")
    })
    .catch((e)=>{
        console.log("mongoDB in connected errer.... ❎",e)
    })
}
