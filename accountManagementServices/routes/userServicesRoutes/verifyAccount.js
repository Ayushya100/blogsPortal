const express = require('express');
const path = require('path');
const router = express.Router();

// Adding Models
const User = require('../../models/userInfoModels');
const sendVerificationSuccessfulEmail = require('../../shared/verificationSuccessfulEmail');

router.get('/:id/:date/:code', async(req, res) => {
    try {
        const _id = req.params.id;
        const date = req.params.date;
        const verificationCode = req.params.code;
        const userFound = await User.findById(_id);
        if (userFound != null) {
            const currentTime = Date.now();
            const verificationTime = Math.ceil((currentTime - date)/3600000);
            if((verificationTime <= 1) && (userFound.verificationCode === verificationCode)) {
                userFound.verificationCode = '';
                userFound.isVerified = true;
                await User.findByIdAndUpdate(_id, userFound);
                res.status(201).sendFile(path.join(__dirname, '../../templates/accountVerified.html'));
                sendVerificationSuccessfulEmail(userFound);
            } else {
                res.status(400).sendFile(path.join(__dirname, '../../templates/accountVerificationFailed.html'));
            }
        } else {
            res.status(404).send('Id invalid(not found)');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
