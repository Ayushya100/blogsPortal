const mongoose = require('mongoose');

// Roles Schema
const rolesSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true
    },
    privilegesAvailable: {
        type: Array,
        required: true,
        uppercase: true
    },
    isValidated: {
        type: Boolean,
        default: false
    }
});

// Create Roles
const Roles = new mongoose.model('Privileges', rolesSchema);

module.exports = Roles;
