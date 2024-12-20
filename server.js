const express = require("express");
// Requires router from articles.js, allowing server to access article routes.
const articleRouter = require("./routes/articles");

const app = express();

// Configuring view engine (EJS), which will convert EJS code used for views to HTML.
app.set("view engine", "ejs");

// Specifies the path of the article router (appends any server routing to "/articles").
app.use("/articles", articleRouter);

app.get("/", (req, res) => {

    const articles = [{
        title: "This is the first article.",
        createdAt: new Date(),
        description: "This is the description of the first article"

    },
    {
        title: "This is another article.",
        createdAt: new Date(),
        description: "This article features even more info than the last one."

    }];

    // articles/index specifies route to index.ejs file in the views/articles subdirectory.
    res.render("articles/index", {articles: articles});

});

app.listen(2525);