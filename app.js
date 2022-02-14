const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes.js');
const credentials = require('./credentials');

// Express app
const app = express();
// Register view engine
app.set("view engine", "ejs");
// Middleware and Static
app.use(express.static('public'));
app.use(express.urlencoded()); // Parses the url and creates an object when data is provided from the url

// Database connection
const dbUrl =
  `mongodb+srv://${credentials.name}:${credentials.password}@nodepracticeblog.ib2cp.mongodb.net/NodePracticeBlog?retryWrites=true&w=majority`;
mongoose
  .connect(dbUrl)
  .then((result) => {
    console.log("Connection to MongoDB successful");
    // Listening for requests if db connection successful
    app.listen(3000);
  })
  .catch((error) => console.log(error));

// -- Routing --

// Home
app.get("/", (request, response) => {
  response.redirect("/blogs");
});

// Blog Routes
app.use('/blogs', blogRoutes);

// About
app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});
// 404 Page
app.use((request, response) => {
  response.status(404).render("404", { title: "Not Found" });
});
