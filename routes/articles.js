const express = require("express");
// Creates a router for articles on the blog, in the same way "app" operates in server.js.
const router = express.Router();

// localhost:2525/articles/new
router.get("/new", (req, res) => {

    // Calls the new.ejs view stored in the views/articles subdirectory.
    res.render("articles/new");
});

// Pulls data from new post form in new.ejs.
router.post("/", (req, res) => {



});

// Exports the router object for use in server.js.
module.exports = router;