// Blogs Route Module
const express = require('express');
const blogController = require('../controllers/blogController.js');
const router = express.Router();


// Since they are scoped, the root is "/blogs"

// Get All Blogs
router.get("/", blogController.blog_index);
// Post New Blog
router.post("/", blogController.blog_create_post);
// Render New Blog Page
router.get("/create", blogController.blog_create_get);
// Find One Blog
router.get('/:id', blogController.blog_details);
// Delete Blog
router.delete('/:id', blogController.blog_delete)

module.exports = router;