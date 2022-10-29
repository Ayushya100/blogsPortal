const express = require('express');
const router = express.Router();

// Adding Models
const Role = require('../../models/roleModels');

router.post('/', async(req, res) => {
    try {
        if (Object.keys(req.body).length != 0) {
            const role = new Role(req.body);
            const createRole = await role.save();
            res.status(201).send(createRole);
        } else {
            res.status(400).send('Request body is missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
