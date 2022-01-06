const mongoose = require("mongoose");
const dbConfig = require('./dbConfig/db.config.js');

module.exports = async function connection() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(dbConfig.url + dbConfig.database, connectionParams);
        console.log("connected to database");
    } catch (error) {
        console.log(error);
        console.log("could not connect to database");
    }
};