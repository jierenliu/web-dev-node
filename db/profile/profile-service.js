const dao = require('./profile-dao')
module.exports = (app) => {

    const findProfile = (req, res) => {
        dao.findProfile()
            .then(profile => {
                res.json(profile)
            });
    }
    const updateProfile = (req, res) => {
        dao.updateProfile(req.params.id, req.body).then(() => {
            res.sendStatus(200);
        })
    }

    app.get('/profile', findProfile);
    app.put('/profile/:id', updateProfile);
};
