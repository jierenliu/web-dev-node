const dao = require('../db/tweets/tweet-dao')
module.exports = (app) => {

    const findAllTweets = (req, res) => {
        dao.findAllTweets()
            .then(tweets => {
                res.json(tweets)
            });
    }

    const postNewTweet = (req, res) => {
        dao.createTweet( {
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                "avatar-image": "../../../images/react.jpeg",
                "logo-image": "../../../images/react.jpeg",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
                "liked": false,
                ...req.body,
            }
        ).then(newTweet => res.json(newTweet));
    }
    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));
    }
    const likeTweet = (req, res) => {
        let likedBefore = false;
        let count = 0;
        dao.findTweetById(req.params.id).then(info => {
            console.log(info);
            likedBefore = info.liked;
            count = info.stats.likes;
            console.log(count)
        }).then(() => {
            if (likedBefore === true) {
                likedBefore = false;
                count--;
            } else {
                likedBefore = true;
                count++
            }
            }
        ).then(() => {
            dao.updateTweet(req.params.id, {liked: likedBefore, 'stats.likes': count});
        }).then(() => {
            res.sendStatus(200);
        })

    }


    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);
};
