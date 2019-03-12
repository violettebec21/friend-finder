//using from hotrestaurant activity to mimic modularization 

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server & sets an initial port
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
//uses package through Express to make the data readable
//.use is a method of our Express object
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
//passing (app) as an argument to 
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
//listening on our port for requests, makes our server live
// This effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});