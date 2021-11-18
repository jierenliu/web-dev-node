const mongoose = require('mongoose');
let conn1 = mongoose.createConnection('mongodb://localhost:27017/who');
const schema = require('./who-schema');
const model1 = conn1.model('WhoModel', schema);
module.exports = model1;
