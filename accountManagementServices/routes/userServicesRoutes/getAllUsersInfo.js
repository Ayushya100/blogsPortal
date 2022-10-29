const express = require('express');
const userInfo = require('../../models/userInfoModels');
const router = express.Router();

// Adding Models
const User = require('../../models/userInfoModels');
const infoToDisplay = 'firstName lastName phoneNo emailId bio userName role profileImg blogsCount blogsList createdAt lastLogin isVerified';

router.get('/', async(req, res) => {
    try {
        const allUsers = await userInfo.find({}, infoToDisplay);
        res.status(200).send(allUsers);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
