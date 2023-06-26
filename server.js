const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


// Configure Multer to store files in the 'uploads' directory
const upload = multer({ dest: 'uploads/' });

// Define an endpoint for uploading CSV files
app.post('/upload', upload.single('file'), (req, res) => {
    const results = [];

    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // You would typically store the data in your database here

            // For simplicity, we will just send the data back in the response
            res.json(results);
        });
});

app.get('/data', (req, res) => {
    // You would typically fetch this data from your database and send it in the response

    // For simplicity, we will send a hardcoded response
    res.json([
        { name: 'Item 1', price: 99.99 },
        { name: 'Item 2', price: 89.99 },
        { name: 'Item 3', price: 79.99 },
    ]);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
