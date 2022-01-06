const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    rating: Number,
    image: String,
    name: String,
    designation: String,
    content: String,
})

module.exports = mongoose.model('Review', ReviewSchema);