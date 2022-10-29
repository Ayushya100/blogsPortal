const express = require('express');
const router = express.Router();

// Adding Models
const User = require('../../models/userInfoModels');
const roleUpdatedSuccessfulMail = require('../../shared/roleUpdatedEmail');

router.put('/:id', async(req, res) => {
    try {
        if(Object.keys(req.body).length != 0) {
            const _id = req.params.id;
            const user = await User.findById(_id);
            if (user != null) {
                await User.findByIdAndUpdate(_id, req.body);
                const role = req.body.role;
                roleUpdatedSuccessfulMail(user.emailId, role);
                res.status(201).send('Role updated successfully');
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
