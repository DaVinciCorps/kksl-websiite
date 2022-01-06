module.exports = (app) => {
    const video = require('../controllers/VideoController.js');

    app.post('/video', video.create);

    app.get('/video', video.findAll);

    app.get('/video/:category', video.findCategory);

    app.get('/video/:videoId', video.findOne);

    app.post('/video/update_video', video.update);

    app.delete('/video/:videoId', video.delete);

}