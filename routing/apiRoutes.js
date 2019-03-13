// ===============================================================================
// 4.) Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. 
//    This will be used to display a JSON of all possible friends.

//    * A POST routes `/api/friends`. 
//    This will be used to handle incoming survey results. 
//      This route will also be used to handle the compatibility logic.

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friend-data, c etc.
// ===============================================================================

var friendData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================
//essentially module.exports = require("./routes/apiRoutes")(app);
module.exports = function (app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------


    //    * A GET route with the url `/api/friends`. 
    //    This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // API POST Requests
    // Below handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out survey... this data is then sent to the server...
    // Then the server saves the data to the friendData array)
    // ---------------------------------------------------------------------------

    //    * A POST routes `/api/friends`. 
    //    This will be used to handle incoming survey results. 

    app.post("/app/friends", function (req, res) {

        //      This route will also be used to handle the compatibility logic.

        // ===============================================================================
        // COMPATIBILITY LOGIC
        //     Determine the user's most compatible friend using the following as a guide:

        //    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
        //    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
        //      * Example:
        //        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
        //        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
        //        * Total Difference: **2 + 1 + 2 =** **_5_**
        //    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
        //    * The closest match will be the user with the least amount of difference.
        // Our "server" will respond to requests and let users know who they are compatible with

        // create an object to hold "bestFriend"
        var bestFriend = {
            name: "",
            photo: "",
            scoreDifference: 0,
        };

        // parse the result of the user submit POST
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScore = userData.score;

        // create a variable to hold the score difference between users
        var scoreDifference = 0;

        // Loop through the friend array in friends.js
        for (var i = 0; i < friendData.length; i++) {
            console.log(friendData[i].name);
            scoreDifference = 0;

            // Loop through scores for each friend & calcualte difference in scores
            for (var j = 0; j < friendData[i].scores[j]; j++) {
                scoreDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));

                // If the sum of differences is less then the differences of the current "best match"
                // set the bestFriend match for the user 
                if (scoreDifference <= bestFriend.friendDifference) {
                    bestFriend.name = friendData[i].name;
                    bestFriend.photo = friendData[i].photo;
                    bestFriend.friendDifference = scoreDifference;
                }
            }
        }

        // push the userData use for HTML
        friendData.push(userData);
        res.json(bestFriend);
    });

    // ---------------------------------------------------------------------------
    // Clear out the data working with the functionality.
    //using from in-class example for clear

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendData.length = [];
        res.json({
            ok: true
        });
    });
};