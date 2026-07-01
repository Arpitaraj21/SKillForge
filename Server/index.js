import express from "express"
import dotenv from 'dotenv'
import connectDB from "./connection.js"
import userRouter  from './routes/User.js'

dotenv.config()

const PORT = process.env.PORT;

const app = express();

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", userRouter)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})