const Blog = require("../models/blog.js");

// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (request, response) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      response.render("blogs/index", { title: "Home | All Blogs", blogs: result });
    })
    .catch((error) => console.log(error));
};

const blog_details = (request, response) => {
  const id = request.params.id;
  Blog.findById(id)
    .then((result) => {
      response.render("blogs/details", { blog: result, title: result.title });
    })
    .catch((error) => response.status(404).render("404", { title: "Not Found" }));
};

const blog_create_get = (request, response) => {
  response.render("blogs/create", { title: "New Blog" });
};

const blog_create_post = (request, response) => {
  const blog = new Blog(request.body);
  blog
    .save()
    .then((result) => {
      response.redirect("/");
    })
    .catch((error) => console.log(error));
};

const blog_delete = (request, response) => {
  const id = request.params.id;
  Blog.findByIdAndDelete(id)
    .then((results) => {
      response.json({ redirect: "/" });
    })
    .catch((error) => console.log(error));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
};
