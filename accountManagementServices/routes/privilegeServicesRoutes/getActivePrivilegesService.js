const express = require('express');
const router = express.Router();

// Adding Models
const Role = require('../../models/roleModels');

router.get('/', async(req, res) => {
    try {
        const allRoles = await Role.find();
        const activeRoles = allRoles.filter(result => {
            return result.isValidated === true;
        });
        res.status(200).send(activeRoles);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
