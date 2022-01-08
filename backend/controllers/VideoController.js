const Video = require("../models/VideoModel.js");

exports.create = (req, res) => {
<<<<<<< HEAD
    console.log(req.body);
=======
    // console.log('test')
>>>>>>> 5cab36ee0fcc52dcb0f10bfd9f0f652a74ed7205
    const video = new Video({
        title: req.body.title,
        youtube_link: req.body.youtube_link,
        category: req.body.category
    })
    video.save()
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating video"
            })
        })
}

exports.findCategory = (req, res) => {
    const category = req.params.videoId;
    if (!category) {
        res.send({
            message: "Category cannot be empty"
        })
    }
    Video.find({ category: category })
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating video"
            })
        })
}

exports.findAll = (req, res) => {

    Video.find()
        .then(video => {
            res.send(video)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching videos"
            })
        })
};

exports.findOne = (req, res) => {
    Video.findById(req.params.videoId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "Video not found with id " + req.params.videoId,
                })
            }
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching video"
            })
        })
};

exports.update = async (req, res) => {
    const videoId = req.body.videoId;
    if (!videoId) {
        return res.status(404).send({
            message: 'VideoId cannot be empty',
        })
    }

    const video = await Video.findById(videoId).exec();
    Video.findByIdAndUpdate(videoId, {
        title: req.body.title || video.title,
        category: req.body.category || video.category,
        youtube_link: req.body.youtube_link || video.youtube_link,
    }, { new: true })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "video not found with id " + req.data.videoId,
                })
            }
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching video"
            })
        })
}

exports.delete = (req, res) => {
    Video.findByIdAndRemove(req.params.videoId)
        .then(video => {
            if (!video) {
                return res.status(404).send({
                    message: "video not found with id " + req.params.videoId
                });
            }
            res.send({ message: "video deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "video not found with id " + req.params.videoId
                });
            }
            return res.status(500).send({
                message: "Could not delete video with id " + req.params.videoId
            });
        });
};