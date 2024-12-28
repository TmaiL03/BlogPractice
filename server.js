// Conceals software secrets from public view.
require("dotenv").config();

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// Requiring article model to allow server to iterate over each article to display them.
const Article = require("./models/article");

// Requires router from articles.js, allowing server to access article routes.
const articleRouter = require("./routes/articles");

const app = express();

// Specifying connection string for MongoDB.
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

// Configuring view engine (EJS), which will convert EJS code used for views to HTML.
app.set("view engine", "ejs");

// Allows elements of article form to be accessible from articles route.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", async (req, res) => {

    // Uses Article model to pull article documents from the MongoDB database and sort them in descending order from most recent to least recent.
    const articles = await Article.find().sort({ createdAt: "desc"});

    // articles/index specifies route to index.ejs file in the views/articles subdirectory.
    res.render("articles/index", {articles: articles});

});

// Specifies the path of the article router (appends any server routing to "/articles").
app.use("/articles", articleRouter);

app.listen(process.env.PORT);