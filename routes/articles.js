const express = require("express");
// 
const Article = require("../models/article");
// Creates a router for articles on the blog, in the same way "app" operates in server.js.
const router = express.Router();

// localhost:2525/articles/new
router.get("/new", (req, res) => {

    // Calls the new.ejs view stored in the views/articles subdirectory.
    res.render("articles/new", { article: new Article()});
});

// Gets article at specified id.
router.get("/:id", (req, res) => {

})

// Pulls data from new post form in new.ejs.
router.post("/", async (req, res) => {

    // Creates Article object in accordance with Article schema.
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });

    try {

        article = await article.save();
        res.redirect(`/articles/${article.id}`);

    } catch (error) {

        // Redirect to new article screen, with prefilled fields from previous submission.
        res.render("articles/new", { article: article });

    }

});

// Exports the router object for use in server.js.
module.exports = router;