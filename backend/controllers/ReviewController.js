const Review = require('../models/ReviewModel.js');

exports.create = async (req, res) => {
    console.log(req.file);
    const fullUrl = req.protocol + '://' + req.get('host');
    const review = new Review({
        image: fullUrl + "/file/" + req.file.filename,
        rating: req.body.rating,
        content: req.body.content,
        name: req.body.name,
        designation: req.body.designation,
    })
    review.save()
        .then((data) => {
            res.send({
                data: data,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating review"
            })
        })
};

exports.findAll = async (req, res) => {

    Review.find()
        .then(review => {
            res.send(review)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching reviews"
            })
        })
};

exports.findOne = (req, res) => {
    Review.findById(req.params.reviewId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "review not found with id " + req.params.reviewId,
                })
            }
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching review"
            })
        })
};

exports.update = async (req, res) => {
    console.log(req.body);
    const fullUrl = req.protocol + '://' + req.get('host');
    const reviewId = req.body.reviewId;
    if (!reviewId) {
        return res.status(404).send({
            message: 'reviewId cannot be empty',
        })
    }
    const review = await Review.findById(reviewId).exec();
    Review.findByIdAndUpdate(reviewId, {
        image: fullUrl + "/file/" + req.file.filename || review.image,
        rating: req.body.rating || review.rating,
        content: req.body.content || review.content,
        name: req.body.name || review.name,
        designation: req.body.designation || review.designation,
    }, { new: true })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "review not found with id " + req.data.reviewId,
                })
            }
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching review"
            })
        })
};

exports.delete = (req, res) => {
    Review.findByIdAndRemove(req.params.reviewId)
        .then(review => {
            if (!review) {
                return res.status(404).send({
                    message: "review not found with id " + req.params.reviewId
                });
            }
            res.send({ message: "review deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "review not found with id " + req.params.reviewId
                });
            }
            return res.status(500).send({
                message: "Could not delete review with id " + req.params.reviewId
            });
        });
};

