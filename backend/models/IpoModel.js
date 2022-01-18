const mongoose = require('mongoose');

const IpoSchema = mongoose.Schema({
    company_name: String,
    exchange: String,
    minimum_amount: Number,
    open_date: Number,
    close_date: Number,
    lot_size: Number,
    low_price: Number,
    high_price: Number,
    issue_size: Number,
    about_para_1: String,
    about_para_2: String,
    recommendation_para_1: String,
    recommendation_para_2: String,
})

module.exports = mongoose.model('Ipo', IpoSchema);