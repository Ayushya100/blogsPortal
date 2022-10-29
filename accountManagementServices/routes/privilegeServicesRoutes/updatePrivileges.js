const express = require('express');
const router = express.Router();

// Adding Models
const Role = require('../../models/roleModels');

router.put('/:id', async(req, res) => {
    try {
        if (Object.keys(req.body).length != 0) {
            const _id = req.params.id;
            const role = await Role.findById(_id);
            if (role != null) {
                await Role.findByIdAndUpdate(_id, {privilegesAvailable: req.body.privilegesAvailable});
                const updatedRole = await Role.findById(_id);
                res.status(201).send(updatedRole);
            } else {
                res.status(404).send('Requested role not found');
            }
        } else {
            res.status(400).send('Request body is missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
