const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: String,
    image: String,
    category: String,
    time_to_read_min: Number,
    content_para_1: String,
    content_para_2: String,
    content_para_3: String,
    content_para_4: String,
})

module.exports = mongoose.model('Blog', BlogSchema);