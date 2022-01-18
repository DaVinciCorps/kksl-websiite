module.exports = (app) => {
    const ipo = require('../controllers/IpoController.js');
    const multer  = require('multer');
    const upload = multer();

    app.post('/ipo', upload.none(), ipo.create);

    app.get('/ipo', ipo.findAll);

    app.get('/ipo/:ipoId', ipo.findOne);

    app.post('/ipo/update_ipo', upload.none(), ipo.update);

    app.delete('/ipo/:ipoId', ipo.delete);

}