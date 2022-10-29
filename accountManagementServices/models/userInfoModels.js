const mongoose = require('mongoose');

// User Info Schema
const userInfoSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    profileImg: {
        type: String
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        length: 10
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    bio: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        uppercase: true,
        trim: true,
        default: 'AUTHOR'
    },
    blogsCount: {
        type: Number,
        default: 0
    },
    blogsList: {
        type: Array
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String
    }
});

// Create UserInfo
const userInfo = new mongoose.model('UserInfo', userInfoSchema);

module.exports = userInfo;
