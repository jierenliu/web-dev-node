const mongoose = require('mongoose');
let conn2 = mongoose.createConnection('mongodb://localhost:27017/webdev');
const schema = require('./schema');
const model = conn2.model('MovieModel', schema);
module.exports = model;

