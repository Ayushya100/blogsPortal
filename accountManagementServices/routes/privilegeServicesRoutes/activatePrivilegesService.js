const express = require('express');
const router = express.Router();

// Adding Models
const Role = require('../../models/roleModels');

router.put('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const role = await Role.findById(_id);
        if (role != null) {
            await Role.findByIdAndUpdate(_id, {isValidated: true});
            const updatedRole = await Role.findById(_id);
            res.status(202).send(updatedRole);
        } else {
            res.status(404).send('Requested role not found');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
