import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

//app config
const app=express()
const PORT=process.env.PORT || 4000
await connectDB()

//initialize middlewares
app.use(express.json())
app.use(cors())


//api routes
app.get('/',(req,res)=>{res.send("api working")})

app.listen(PORT,()=>console.log("server is running on port: ",PORT))