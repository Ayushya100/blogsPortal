const mongoose = require('mongoose');

// Tags Schema
const tagsSchema = new mongoose.Schema({
    tagName: {
        type: String,
        required: true,
        trime: true
    },
    isValidated: {
        type: Boolean,
        default: false
    }
});

// Create Tags
const Tags = new mongoose.model('Tags', tagsSchema);

module.exports = Tags;
