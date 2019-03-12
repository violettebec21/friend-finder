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
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out survey... this data is then sent to the server...
    // Then the server saves the data to the friendData array)
    // ---------------------------------------------------------------------------

    //    * A POST routes `/api/friends`. 
    //    This will be used to handle incoming survey results. 
    //      This route will also be used to handle the compatibility logic.

    app.post("/app/friends", function (req, res) {

        // Our "server" will respond to requests and let users know who they are compatible with
        // Sends out the "true" value for matches
        // req.body is available since we're using the body parsing middleware
        //body represents our form data here 


        // if (friendData.length < 5) {
        //     tableData.push(req.body);
        //     res.json(true);
        //     //should match compatibility of each response compared to other survery completions
        //   }
        //   else {
        //     waitListData.push(req.body);
        //     res.json(false);

        //   }
    });

    // ---------------------------------------------------------------------------
    // Clear out the data working with the functionality.

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendData.length = [];
        res.json({
            ok: true
        });
    });
};