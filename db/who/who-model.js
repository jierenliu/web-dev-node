const mongoose = require('mongoose');
let conn1 = mongoose.createConnection('mongodb+srv://andy:andyliu@web.4clog.mongodb.net/who?retryWrites=true&w=majority');
const schema = require('./who-schema');
const model1 = conn1.model('WhoModel', schema);
module.exports = model1;
