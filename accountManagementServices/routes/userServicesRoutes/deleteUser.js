const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// Adding Models
const User = require('../../models/userInfoModels');
const accountDeleteSuccessfulMail = require('../../shared/deleteUserEmail');

router.delete('/:id', async(req, res) => {
    try {
        if(Object.keys(req.body).length != 0) {
            const _id = req.params.id;
            const user = await User.findById(_id);
            if (user != null) {
                const password = req.body.password;
                bcrypt.compare(password, user.password).then(async(result) => {
                    if (result) {
                        await User.findByIdAndDelete(_id);
                        accountDeleteSuccessfulMail(user.emailId);
                        res.status(200).send('Account Deleted Successfully');
                    } else {
                        res.status(403).send('Invalid credentials');
                    }
                })
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
