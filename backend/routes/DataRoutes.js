module.exports = (app) => {
    const data = require('../controllers/DataController.js');
    const multer  = require('multer')
    const upload = multer()
    app.post('/data/unlisted_stocks',upload.none(), data.equity);
    app.post('/data/internation_investment',upload.none(), data.international);

}