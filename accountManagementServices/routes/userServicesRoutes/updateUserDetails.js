const express = require('express');
const router = express.Router();

// Adding Models
const Users = require('../../models/userInfoModels');
const accountUpdatedSuccessfulMail = require('../../shared/accountUpdatedEmail');
const infoToDisplay = 'firstName lastName phoneNo emailId bio userName role profileImg blogsCount blogsList createdAt lastLogin isVerified';

router.put('/:id', async(req, res) => {
    try {
        if (Object.keys(req.body).length != 0) {
            const _id = req.params.id;
            const user = await Users.findById(_id);
            if (user != null) {
                await Users.findByIdAndUpdate(_id, req.body);
                const updatedUser = await Users.findById(_id, infoToDisplay);
                const createdAt = updatedUser.createdAt;
                const lastLogin = updatedUser.lastLogin;
                const createdDate = createdAt.getDate() + '/' + createdAt.getMonth() + '/' + createdAt.getFullYear() + ' ' + createdAt.getHours() + ':' + createdAt.getMinutes() + ':' + createdAt.getSeconds();
                const loginDate = lastLogin.getDate() + '/' + lastLogin.getMonth() + '/' + lastLogin.getFullYear() + ' ' + lastLogin.getHours() + ':' + lastLogin.getMinutes() + ':' + lastLogin.getSeconds();
                res.status(201).send(updatedUser);
                accountUpdatedSuccessfulMail(updatedUser, createdDate, loginDate);
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
