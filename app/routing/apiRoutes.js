var friendData = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res){
        res.json(friendData);
    });

    //post data to the api
    app.post('/api/friends', function (req, res) {
        friendData.push(req.body);
    })
}