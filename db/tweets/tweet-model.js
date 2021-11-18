const mongoose = require('mongoose');
let conn1 = mongoose.createConnection('mongodb+srv://andy:andyliu@web.4clog.mongodb.net/tweets?retryWrites=true&w=majority');
const schema = require('./tweet-schema');
const model1 = conn1.model('TweetModel', schema);
module.exports = model1;
