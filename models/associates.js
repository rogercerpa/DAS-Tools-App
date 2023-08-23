const mongoose = require('mongoose');

const associatesSchema = new mongoose.Schema({
    'firstName': String,
    'lastName': String,
});

const Associate = mongoose.model('Associate', associatesSchema, 'AssociatesData');

module.exports = Associate;