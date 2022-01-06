const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOptions));

var corsOptions = {
    origin: "http://localhost:3000"
};

const connection = require('./db');
connection();

require('./routes/BlogRoutes.js')(app);
require('./routes/VideoRoutes.js')(app);
require('./routes/ReviewRoutes')(app);


app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});