import express from "express"
import dotenv from "dotenv"
import authRoutes from './routes/auth.routers.js'
import connectToMongoDB from "./db/connectToMongoDB.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()); // to parse input from req body
app.use("/api/auth", authRoutes)


app.listen(PORT, ()=> {
    connectToMongoDB()
    console.log("Server running")
})