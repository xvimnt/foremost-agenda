const express = require('express');
const noteSchema = require('../models/note')

const router = express.Router()

// Create note
router.post('/addNote', (req,res) => {
    const note = noteSchema(req.body)
    note.save().then(data => res.json(data))
    .catch(error => res.json({message: error}));
})

module.exports = router;