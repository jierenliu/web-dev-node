const mongoose = require('mongoose');
let conn2 = mongoose.createConnection('mongodb+srv://andy:andyliu@web.4clog.mongodb.net/webdev?retryWrites=true&w=majority');
const schema = require('./schema');
const model = conn2.model('MovieModel', schema);
module.exports = model;

