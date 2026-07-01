import express from 'express';
import dotenv from 'dotenv';
import bcrypt, { hash } from 'bcrypt';
import User from '../models/Users.js';

dotenv.config()

const handleUserRegistration = async (req, res) => {
    try {
        const { name, email, password, role,headline, phoneNumber, profileImageUrl, socialLinks } = req.body;

        console.log("headers", req.headers);
        console.log("body", req.body)
        //  check if user already exists
        const isExistingUser = await User.findOne({email});
        if (isExistingUser){
            return res.json({
                "message": "User already exists!",
                "success": false,
                "status": 409
            })
        }

        // hash the password
        const hashPassword = await bcrypt.hash(password,10);

        await User.create({
            name,
            email,
            password: hashPassword,
            role,
            headline,
            phoneNumber,
            profileImageUrl,
            socialLinks
        })

        return res.json({
            "message": "New User created successfully!",
            "success": true,
            "status": 200
        })
    } catch (error) {
        console.log("error in user registration", error);
        return res.json({
            "message": "Internal Server Error!",
            "success": false,
            "status": 500
        })
    }
}


const handleUserLogin = async (req,res) => {
    const {email, password} = req.body;

    try {
        // check if user entered something
        if (!email || !password) {
            return res.json({
                "message": "All fields are required!",
                "success": false,
                "status": 422
            })
        }

        // check if exists or not
        const isUserExists = await User.findOne({ email });
      
        // if user does not exists
        if (!isUserExists) {
            return res.json({
                "message": "User doesn't exist!",
                "success": false,
                "status": 404,
            })
        }

        //  check if password is correct
        const isPasswordValid = await bcrypt.compare(password, isUserExists.password);

        if(!isPasswordValid){
            return res.json({
                "message": "Invalid credentials!",
                "success": false,
                "status": 422
            })
        }

        return res.json({
            "message": "Login successfully!",
            "success": true,
            "status": 200
        })
    } catch (error) {
        console.log("error in login", error);
        return res.json({
            "message": "Internal Server Error!",
            "success": "false",
            "status": 500
        })
    }
}

export  {handleUserRegistration, handleUserLogin};

