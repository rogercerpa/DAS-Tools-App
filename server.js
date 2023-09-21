const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const Item = require('./models/item');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const Associates = require('./models/associates')
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

app.use(cors());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), async (req, res) => {

  // Delete all existing items from the collection
  await Item.deleteMany({});

 // Delete all files in the 'uploads' directory except the current one
    const files = await fs.promises.readdir('uploads');
  await Promise.all(files.map(file => {
      const filePath = path.join('uploads', file);
      if (filePath !== req.file.path) {
          return fs.promises.unlink(filePath);
      }}));

  // Delete the uploaded file from memory after processing
  const uploadedFile = req.file.buffer;
  
  // Process uploadedFile and save to MongoDB
  const File = require('./models/item');
  const newFile = new File({ data: uploadedFile });
  await newFile.save();

  // Process CSV data
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

app.get('/associates', async (req, res) => {
  const associates = await Associates.find();
  res.json(associates);
});

//authentication setup using passport.js

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});
const User = mongoose.model('User', UserSchema);

// Passport Configuration
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }

      // Check password with bcrypt
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Middlewares
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// passport.js Routes
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}));

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;

    const newUser = new User({
      username,
      password: hashedPassword
    });

    newUser.save().then(user => {
      res.redirect('/login');
    }).catch(err => {
      res.redirect('/register');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


