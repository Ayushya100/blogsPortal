const express = require('express');
const router = express.Router();

// Adding Models
const Users = require('../../models/userInfoModels');
const infoToDisplay = 'firstName lastName phoneNo emailId bio userName role profileImg blogsCount blogsList createdAt lastLogin isVerified';

router.get('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const user = await Users.findById(_id, infoToDisplay);

        if(!user) {
            res.status(404).send('User not found');
        } else {
            res.status(200).send(user);
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
