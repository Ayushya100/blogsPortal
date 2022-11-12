const mongoose = require('mongoose');

// Blogs Schema
const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String
    },
    overview: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    version: {
        type: String,
        default: 'v1.0'
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    tags: {
        type: Array,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    authorId: {
        type: String,
        required: true
    }
});

// Create Blogs
const Blogs = new mongoose.model('Blogs', blogsSchema);

module.exports = Blogs;
