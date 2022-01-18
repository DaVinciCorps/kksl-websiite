const Video = require("../models/VideoModel.js");
const sendMail = require("../middleware/Mailer.js");


exports.equity = (req, res) => {
    console.log(req.body);
    const text = `Mail for unlisted stocks

Name: ${req.body.name}
Phone No.: ${req.body.phone}
Email: ${req.body.email}
Stock: ${req.body.stock}

Thanks
KKSL
    `
    sendMail("Unlisted Stocks", text);
    res.send({
        message: "SUCCESS"
    })
}

exports.international = (req, res) => {
    console.log(req.body);
    const text = `Mail for Internation Investment

Name: ${req.body.name}
Phone No.: ${req.body.phone}
Email: ${req.body.email}

Thanks
KKSL
    `
    sendMail("International Investment", text);
    res.send({
        message: "SUCCESS",
    })
}

