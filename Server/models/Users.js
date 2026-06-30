import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['student', 'instructor'],
        default: "student"
    },
    headline: {
        type: String,
        maxlength: 30
    },
    role: {
        alias: "student" | "instructor"
    },
    phoneNumber: {
        type: Number,
        unique: true
    },
    profileImageUrl: {
        type: String
    },
    socialLinks: {
        linkedin: { type: String },
        github: { type: String }
    },
    thumbnailUrl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})


const User = mongoose.model("User", userSchema)

export default User;