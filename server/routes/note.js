const express = require('express');
const noteSchema = require('../models/note')

const router = express.Router()

// Create note
router.post('/addNote', (req,res) => {
    const note = noteSchema(req.body)
    note.save().then(data => res.json(data))
    .catch(error => res.json({message: error}));
})

// get notes
router.get('/getNotes', (req,res) => {
    noteSchema.find().then(data => res.json(data))
    .catch(error => res.json({message: error}));
})

// Update note
router.put('/editNote', (req,res) => {
    const { title, body, id, date } = req.body;
    console.log('editing', req.body)

    noteSchema.updateOne({_id: id}, { $set: {title, body, date } }).then(data => res.json(data))
    .catch(error => res.json({message: error}));
})


module.exports = router;