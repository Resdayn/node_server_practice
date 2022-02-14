const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema creation
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

// Model creation
const Blog = mongoose.model('Blog', blogSchema);

// Export model
module.exports = Blog;