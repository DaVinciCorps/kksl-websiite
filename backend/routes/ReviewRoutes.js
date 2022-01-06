module.exports = (app) => {
    const review = require('../controllers/ReviewController.js');
    const upload = require('../middleware/FileUpload.js');

    app.post('/review', upload.single('file'), review.create);

    app.get('/review', review.findAll);

    app.get('/review/:reviewId', review.findOne);

    app.post('/review/update_review', upload.single('file'), review.update);

    app.delete('/review/:reviewId', review.delete);

}