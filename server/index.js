const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
const port = 5000;

const noteRoutes = require('./routes/note');

app.use('/api', noteRoutes);
app.use(express.json());

app.get('/', (req,res) => {
    res.send('welcome to the server')
})

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('connected to mongodb atlas'))
    .catch((e) => console.error(e));

app.listen(port, () => {
    console.log(`server running in port ${port}.`)
})