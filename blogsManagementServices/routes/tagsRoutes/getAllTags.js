const express = require('express');
const router = express.Router();

// Adding Models
const Tags = require('../../models/tagsModels');

router.get('/', async(req, res) => {
    try {
        const allTags = await Tags.find();
        res.status(200).send(allTags);
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
