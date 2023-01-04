const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
const port = 5000;
var cors = require('cors')
var bodyParser = require('body-parser')

// middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

// routes
const noteRoutes = require('./routes/note');
app.use('/api', noteRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('connected to mongodb atlas'))
    .catch((e) => console.error(e));

app.listen(port, () => {
    console.log(`server running in port ${port}.`)
})