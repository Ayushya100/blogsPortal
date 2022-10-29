const express = require('express');
const router = express.Router();

// Adding Models
const Role = require('../../models/roleModels');

router.get('/', async(req, res) => {
    try {
        const allRoles = await Role.find();
        res.status(200).send(allRoles);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
