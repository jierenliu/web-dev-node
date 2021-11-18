const mongoose = require('mongoose');
let conn1 = mongoose.createConnection('mongodb://localhost:27017/profile');
const schema = require('./profile-schema');
const model1 = conn1.model('ProfileModel', schema);
module.exports = model1;
