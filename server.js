const express = require("express");
// Requires router from articles.js, allowing server to access article routes.
const articleRouter = require("./routes/articles");

const app = express();

// Configuring view engine (EJS), which will convert EJS code used for views to HTML.
app.set("view engine", "ejs");

// Specifies the path of the article router (appends any server routing to "/articles").
app.use("/articles", articleRouter);

app.get("/", (req, res) => {

    res.render("index");

});

app.listen(2525);