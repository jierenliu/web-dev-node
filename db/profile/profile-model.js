const mongoose = require('mongoose');
let conn1 = mongoose.createConnection('mongodb+srv://andy:andyliu@web.4clog.mongodb.net/profile?retryWrites=true&w=majority');
const schema = require('./profile-schema');
const model1 = conn1.model('ProfileModel', schema);
module.exports = model1;
