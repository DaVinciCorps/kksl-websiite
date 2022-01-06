module.exports = (app) => {
    const blogs = require('../controllers/BlogController.js');
    const upload = require('../middleware/FileUpload.js');

    app.post('/blogs', upload.single('file'), blogs.create);

    app.get('/blogs', blogs.findAll);

    app.get('/blogs/:blogId', blogs.findOne);

    app.post('/blogs/update_blog', upload.single('file'), blogs.update);

    app.delete('/blogs/:blogId', blogs.delete);

    app.get("/file/:name", blogs.download);
}