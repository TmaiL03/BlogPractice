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
router.get("/:id", async (req, res) => {

    // Finds article by ID in the database after saving.
    const article = await Article.findById(req.params.id);

    // If article is not found, return to home page.
    if(article == null) {

        res.redirect("/");

    }

    // Displays the newly generated article.
    res.render("articles/show", { article: article });
});

// Pulls data from new post form in new.ejs.
router.post("/", async (req, res) => {

    // Creates Article object in accordance with Article schema.
    let article = new Article({
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