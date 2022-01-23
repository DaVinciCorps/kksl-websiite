const Ipo = require("../models/IpoModel.js");


exports.create = (req, res) => {
    console.log(req.body)
    const ipo = new Ipo({
        company_name: req.body.company_name,
        exchange: req.body.exchange,
        minimum_amount: req.body.minimum_amount,
        open_date: req.body.open_date,
        close_date: req.body.close_date,
        lot_size: req.body.lot_size,
        low_price: req.body.low_price,
        high_price: req.body.high_price,
        about_para_1: req.body.about_para_1,
        about_para_2: req.body.about_para_2,
        issue_size: req.body.issue_size,
        recommendation_para_1: req.body.recommendation_para_1,
        recommendation_para_2: req.body.recommendation_para_2,
    })
    ipo.save()
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating ipo"
            })
        })
}

exports.findCategory = (req, res) => {
    const category = req.body.category;
    if (!category) {
        res.send({
            message: "Category cannot be empty"
        })
    }
    Ipo.find({ category: category })
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating ipo"
            })
        })
}

exports.findAll = (req, res) => {
    const time = (new Date()).getTime();
    Ipo.find()
        .then(ipo => {
            const active = ipo.filter(i=>i.open_date<time && i.close_date>time);
            const upcoming = ipo.filter(i=>i.open_date>time);
            const past = ipo.filter(i=>i.close_date<time && i.close_date>(time - 10*24*60*60*1000));
            res.send({
                active: active,
                past: past,
                upcoming: upcoming,
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching ipos"
            })
        })
};

exports.findOne = (req, res) => {
    Ipo.findById(req.params.ipoId)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "Ipo not found with id " + req.params.ipoId,
                })
            }
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching ipo"
            })
        })
};

exports.update = async (req, res) => {
    const ipoId = req.body.ipoId;
    if (!ipoId) {
        return res.status(404).send({
            message: 'IpoId cannot be empty',
        })
    }

    const ipo = await Ipo.findById(ipoId).exec();
    Ipo.findByIdAndUpdate(ipoId, {
        company_name: req.body.company_name || ipo.company_name,
        exchange: req.body.exchange || ipo.exchange,
        minimum_amount: req.body.minimum_amount || ipo.minimum_amount,
        open_date: req.body.open_date || ipo.open_date,
        close_date: req.body.close_date || ipo.close_date,
        lot_size: req.body.lot_size || ipo.lot_size,
        low_price: req.body.low_price || ipo.low_price,
        high_price: req.body.high_price || ipo.high_price,
        issue_size: req.body.issue_size || ipo.issue_size,
        about_para_1: req.body.about_para_1 || ipo.about_para_1,
        about_para_2: req.body.about_para_2 || ipo.about_para_2,
        recommendation_para_1: req.body.recommendation_para_1 || ipo.recommendation_para_1,
        recommendation_para_2: req.body.recommendation_para_2 || ipo.recommendation_para_2,
    }, { new: true })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "ipo not found with id " + req.data.ipoId,
                })
            }
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while fetching ipo"
            })
        })
}

exports.delete = (req, res) => {
    Ipo.findByIdAndRemove(req.params.ipoId)
        .then(ipo => {
            if (!ipo) {
                return res.status(404).send({
                    message: "ipo not found with id " + req.params.ipoId
                });
            }
            res.send({ message: "ipo deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "ipo not found with id " + req.params.ipoId
                });
            }
            return res.status(500).send({
                message: "Could not delete ipo with id " + req.params.ipoId
            });
        });
};