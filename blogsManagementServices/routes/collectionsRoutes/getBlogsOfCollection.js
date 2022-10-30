const express = require('express');
const router = express.Router();

// Adding Models
const Collections = require('../../models/collectionsModels');

router.get('/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const collections = await Collections.findById(_id);
        if (collections != null) {
            
        } else {
            res.status(404).send('Requested Collection not found');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
