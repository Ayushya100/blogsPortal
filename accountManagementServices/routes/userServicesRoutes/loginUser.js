const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const randomBytes = require('randombytes');
const router = express.Router();

// Adding Models
const User = require('../../models/userInfoModels');
const sendVerificationEmail = require('../../shared/sendVerificationEmail');
const infoToDisplay = 'firstName lastName phoneNo emailId bio userName role profileImg blogsCount blogsList password createdAt lastLogin isVerified';

router.post('/', async(req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        if(userName && password) {
            const user = await User.findOne({userName: userName}, infoToDisplay);
            const isAuthenticated = await bcrypt.compare(password, user.password);
            if (user != null && isAuthenticated) {
                if (user.isVerified) {
                    const secretKey = randomBytes(64).toString('base64');
                    const token = jwt.sign({user}, secretKey);
                    res.status(202).send(token);
                } else {
                    const verificationCode = sendVerificationEmail(user._id, user.emailId);
                    await User.findByIdAndUpdate(user._id, { 'verificationCode' : verificationCode });
                    res.status(201).send('Verification required');
                }
            } else {
                res.status(403).send('Unauthorized User');
            }
        } else {
            res.status(400).send('Request body missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
