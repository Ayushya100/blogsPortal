const express = require('express');
const router = express.Router();

// Adding Models
const Collections = require('../../models/collectionsModels');

router.post('/', async(req, res) => {
    try {
        const title = req.body.title;
        const overview = req.body.overview;
        const tags = req.body.tags;
        if ((title != null) && (overview != null) && (tags != null)) {
            const collections = new Collections(req.body);
            const createCollections = await collections.save();
            res.status(201).send(createCollections);
        } else {
            res.status(400).send('Request body is missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
