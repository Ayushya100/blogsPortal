const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// Adding Models
const User = require('../../models/userInfoModels');
const passwordUpdatedSuccessfulMail = require('../../shared/passwordUpdatedEmail');

router.put('/:id', async(req, res) => {
    try {
        if(Object.keys(req.body).length != 0) {
            const _id = req.params.id;
            const user = await User.findById(_id);
            if (user != null) {
                const oldPassword = req.body.oldPassword;
                const newPassword = req.body.newPassword;
                const saltRounds = 10;
                bcrypt.compare(oldPassword, user.password).then(result => {
                    if (result && oldPassword != newPassword) {
                        bcrypt.hash(newPassword, saltRounds).then(async(newPass) => {
                            await User.findByIdAndUpdate(_id, { 'password': newPass });
                            passwordUpdatedSuccessfulMail(user.emailId);
                            res.status(201).send('Password updated successfully');
                        });
                    } else {
                        res.status(403).send('Invalid credentials');
                    }
                });
            } else {
                res.status(404).send('Requested user not found');
            }
        } else {
            res.status(400).send('Request body is missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
