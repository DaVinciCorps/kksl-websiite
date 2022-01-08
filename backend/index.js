const express = require('express');
const cors = require("cors");
var multer = require('multer');
var upload = multer();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(upload.array()); 
app.use(express.static('public'));

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