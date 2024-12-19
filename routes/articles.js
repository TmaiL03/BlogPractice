const express = require("express");
// Creates a router for articles on the blog, in the same way "app" operates in server.js.
const router = express.Router();

// Ulocalhost:2525/articles/
router.get("/", (req, res) => {

    res.send("This is my articles route!");

})

// Exports the router object for use in server.js.
module.exports = router;