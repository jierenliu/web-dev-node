const mongoose = require('mongoose');
const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    website: String,
    bio:String,
    location: String,
    dateOfBirth: String,
    dateJoined: String,
    followingCount: Number,
    followersCount: Number,
    tweetNum: Number
}, {collection: "profile"});
module.exports = schema;
