module.exports = (app) => {
    const video = require('../controllers/VideoController.js');
    const multer  = require('multer')
    const upload = multer()
    app.post('/video',upload.none(), video.create);

    app.get('/video', video.findAll);

    app.post('/video/category',upload.none(), video.findCategory);

    app.get('/video/:videoId', video.findOne);

    app.post('/video/update_video',upload.none(), video.update);

    app.delete('/video/:videoId', video.delete);

}