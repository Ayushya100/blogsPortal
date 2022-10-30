const express = require('express');
const router = express.Router();

// Adding Models
const Tags = require('../../models/tagsModels');

router.post('/', async(req, res) => {
    try {
        const tagName = req.body.tagName;
        if (tagName != null) {
            const tags = new Tags(req.body);
            const createTags = await tags.save();
            res.status(201).send(createTags);
        } else {
            res.status(400).send('Required body is missing');
        }
    } catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
