const express = require('express');
const router = express.Router();

// Adding Models
const Collections = require('../../models/collectionsModels');

router.put('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        if (Object.keys(req.body).length != 0) {
            const collection = await Collections.findById(_id);
            if (collection != null) {
                await Collections.findByIdAndUpdate(_id, req.body);
                const updatedCollection = await Collections.findById(_id);
                res.status(201).send(updatedCollection);
            } else {
                res.status(404).send('Requested Collection not found');
            }
        } else {
            res.status(400).send('Required parameters are missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
