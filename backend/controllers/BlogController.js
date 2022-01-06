const Blog = require('../models/BlogModel.js');
const dbConfig = require("../dbConfig/db.config.js");
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;
const url = dbConfig.url;
const mongoClient = new MongoClient(url);

exports.create = async (req, res) => {
    console.log(req.file);
    const fullUrl = req.protocol + '://' + req.get('host');
    const blog = new Blog({
        title: req.body.title,
        image: fullUrl + "/file/" + req.file.filename,
        category: req.body.category,
        time_to_read_min: req.body.time_to_read_min,
        content_para_1: req.body.content_para_1 || "",
        content_para_2: req.body.content_para_2 || "",
        content_para_3: req.body.content_para_3 || "",
        content_para_4: req.body.content_para_4 || "",
    })
    blog.save()
        .then((data) => {
            res.send({
                data: data,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating blog"
            })
        })
};

exports.findAll = async (req, res) => {

    Blog.find()
        .then(blog => {
            res.send(blog)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching blogs"
            })
        })
};

exports.findOne = (req, res) => {
    Blog.findById(req.params.blogId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "Blog not found with id " + req.params.blogId,
                })
            }
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching blog"
            })
        })
};

exports.update = async (req, res) => {
    console.log(req.body);
    const fullUrl = req.protocol + '://' + req.get('host');
    const blogId = req.body.blogId;
    if (!blogId) {
        return res.status(404).send({
            message: 'BlogId cannot be empty',
        })
    }
    const blog = await Blog.findById(blogId).exec();
    Blog.findByIdAndUpdate(blogId, {
        title: req.body.title || blog.title,
        category: req.body.category || blog.category,
        image: req.file ? fullUrl + "/file/" + req.file.filename : blog.image,
        time_to_read_min: req.body.time_to_read_min || blog.time_to_read_min,
        content_para_1: req.body.content_para_1 || blog.content_para_1,
        content_para_2: req.body.content_para_2 || blog.content_para_2,
        content_para_3: req.body.content_para_3 || blog.content_para_3,
        content_para_4: req.body.content_para_4 || blog.content_para_4,
    }, { new: true })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "Blog not found with id " + req.data.blogId,
                })
            }
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching blog"
            })
        })
};

exports.delete = (req, res) => {
    Blog.findByIdAndRemove(req.params.BlogId)
        .then(Blog => {
            if (!Blog) {
                return res.status(404).send({
                    message: "Blog not found with id " + req.params.BlogId
                });
            }
            res.send({ message: "Blog deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Blog not found with id " + req.params.BlogId
                });
            }
            return res.status(500).send({
                message: "Could not delete Blog with id " + req.params.BlogId
            });
        });
};

exports.download = async (req, res) => {
    try {
        await mongoClient.connect();
        const database = mongoClient.db(dbConfig.database);

        const bucket = new GridFSBucket(database, {
            bucketName: dbConfig.imgBucket,
        });

        let downloadStream = bucket.openDownloadStreamByName(req.params.name);

        downloadStream.on("data", function (data) {
            return res.status(200).write(data);
        });

        downloadStream.on("error", function (err) {
            return res.status(404).send({ message: "Cannot download the Image!" });
        });

        downloadStream.on("end", () => {
            return res.end();
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message,
        });
    }
};