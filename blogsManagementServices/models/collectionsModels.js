const mongoose = require('mongoose');

// Collections Schema
const collectionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    overview: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: Array,
        required: true,
        trim: true
    },
    collectionList: {
        type: Array
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
        default: 0
    }
});

// Create Collections
const Collections = new mongoose.model('Collections', collectionsSchema);

module.exports = Collections;
