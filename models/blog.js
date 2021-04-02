const mongoose = require('mongoose');
const { Schema } = mongoose


const BlogSchema = new Schema({
    blogName: {
        type: String,
    },
    blogDescription: {
        type: String
    },
    blogDate: {
        type: Date,
        default: Date.now
    }
});
const Blog = mongoose.model('Blogs', BlogSchema);
exports.Blogs = Blog;
