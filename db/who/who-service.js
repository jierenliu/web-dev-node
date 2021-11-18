const dao = require('./who-dao')
module.exports = (app) => {

    const findAllTweets = (req, res) => {
        dao.findAllTweets()
            .then(who => {
                res.json(who)
            });
    }
    app.get('/whoToFollow', findAllTweets);
};
