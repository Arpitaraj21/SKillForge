import express, { Router } from 'express'
import {handleUserLogin, handleUserRegistration} from '../controllers/User.js' 

const userRouter = express.Router()

userRouter.post("/register", handleUserRegistration);
userRouter.post("/login", handleUserLogin);

export default userRouter;