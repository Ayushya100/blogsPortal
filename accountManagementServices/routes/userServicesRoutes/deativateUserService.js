const express = require('express');
const router = express.Router();

// Adding Models
const User = require('../../models/userInfoModels');
const accountDeactivateSuccessfulMail = require('../../shared/deactivateUserEmail');

router.put('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findById(_id);
        if (user != null) {
            await User.findByIdAndUpdate(_id, { 'isVerified' : false });
            res.status(201).send('Account Deactivated');
            accountDeactivateSuccessfulMail(user.emailId);
        } else {
            res.status(404).send('Requested user not found');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
