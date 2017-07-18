var friendData = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendData);
    });

    //post data to the api
    app.post('/api/friends', function (req, res) {
     
        //convert user scores to integer
        var userScore = req.body.scores.map(function (i) {
            return parseInt(i);
        });

        var scoreArray = [];
        //iterate through the friendData array
        for (var i = 0; i < friendData.length; i++) {
            var scoreDifference = 0;
            //iterate through the userScore array 
            for (var j = 0; j < userScore.length; j++){
                //add up the differences between userScore and friendData[i]
                scoreDifference += Math.abs(parseInt(friendData[i].scores[j])-(userScore[j]));
            }
            //push difference into array
            scoreArray.push(scoreDifference);
        }
        console.log(scoreArray);
        var smallestIndex = 0;

        //iterate through the scoreArray to find the index of the smallest integer
        for (var i = 0; i < scoreArray.length; i++){
            if (scoreArray[i] <= scoreArray[smallestIndex]){
                smallestIndex = i;
            }
        }
        console.log(scoreArray[smallestIndex]);

        var bestMatch = friendData[smallestIndex];

        res.json(bestMatch);

        //push new userData into friendData
        friendData.push(req.body);

    });
}