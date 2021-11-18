const mongoose = require('mongoose');
let conn1 = mongoose.createConnection('mongodb://localhost:27017/tweets');
const schema = require('./tweet-schema');
const model1 = conn1.model('TweetModel', schema);
module.exports = model1;
