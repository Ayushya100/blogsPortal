const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const sendVerificationEmail = require('../../shared/sendVerificationEmail');

// Adding Models
const User = require('../../models/userInfoModels');

router.post('/', async(req, res) => {
    try {
        let password = req.body.password;

        const saltRounds = 10;
        req.body.password = await bcrypt.hash(password, saltRounds);

        const user = new User(req.body);
        await user.save().then(async(result) => {
            const createUser = result;
            req.body.verificationCode = sendVerificationEmail(createUser._id, createUser.emailId);
            await User.findByIdAndUpdate(createUser._id, req.body);

            const updatedUser = await User.findById(createUser._id);
            res.status(201).send(updatedUser);
        }).catch(err => {
            res.status(400).send(err);
        });
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
