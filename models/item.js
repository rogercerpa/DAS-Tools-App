const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    'WQ #': Number,
    'Task Type': String,
    'Doc #': String,
    'Rep': Number,
    'Status': String,
    'Assigned To': String,
    'Due Date': Date,
    'Requested Date': Date,
    'Job Name': String,
    'Est. Hours': Number,
    'Complexity': String,
    'User Comment': String,
    'Subtask': String
});

const Item = mongoose.model('Item', itemSchema, 'QueueData');

module.exports = Item;
