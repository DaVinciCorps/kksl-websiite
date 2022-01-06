const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    title: String,
    youtube_link: String,
    category: String,
})

module.exports = mongoose.model('Video', VideoSchema);