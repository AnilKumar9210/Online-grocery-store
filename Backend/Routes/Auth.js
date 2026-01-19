import express from "express";
import bcrypt from "bcryptjs";
import User from "../Schema/user.js";
import jwt from "jsonwebtoken"

const authRoute = express.Router ();

authRoute.post ("/register", async (req, res) => {
    const {email, password} = req.body;

    try {
        let hashedPass = await bcrypt.hash (password, 10);

        const userExist = await User.findOne ({email: email});
        if (userExist) {
            return res.status (400).json ({message: "User already exists"});
        }

        const newUser = new User ({
            email,
            password: hashedPass,
        })

        await newUser.save ();

        res.status (201).json ({message: "User registered successfully"});


    } catch (error) {
        res.status (500).json ({message: "Internal Server Error"});
    }
});

authRoute.post ("/login", async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne ({email:email});
        if (!user) {
            return res.status (400).json ({message: "User not found"});
        }

        const isMatch = await bcrypt.compare (password,user.password);

        if (!isMatch) {
            return res.status (400).json ({message: "Invalid password"});
        }

        const token = jwt.sign ({userId:user._id,}, process.env.JWT_SECRET, {expiresIn:"1d"});

        res.status (200).json ({message: "Login successful",
      token,
      user:{
        id: user._id,
        email: user.email,
      },});
    } catch (error) {
        res.status (500).json ({message: "Internal Server Error"});
    }
});

export default authRoute;