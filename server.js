const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const Item = require('./models/item');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const uri = process.env.MONGODB_URI;

app.use(cors());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


// Configure Multer to store files in the 'uploads' directory
const upload = multer({ dest: 'uploads/' });

// Define an endpoint for uploading CSV files
app.post('/upload', upload.single('file'), async (req, res) => {
  // Delete all existing items from the collection
  await Item.deleteMany({});

  // Delete all files in the 'uploads' directory except the current one
  const files = await fs.promises.readdir('uploads');
  await Promise.all(files.map(file => {
      const filePath = path.join('uploads', file);
      if (filePath !== req.file.path) {
          return fs.promises.unlink(filePath);
      }
  }));

  fs.createReadStream(req.file.path)
      .pipe(csv())
      .on('data', async (data) => {
          const item = new Item(data);
          await item.save();
      })
      .on('end', () => {
          res.status(200).send('CSV file uploaded and parsed successfully');
      });
});

  

app.get('/data', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
