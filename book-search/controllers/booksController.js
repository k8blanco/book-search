const db = require("../models");

//Define controller methods
module.exports = {
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("attempting to save");
        db.Book 
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Book
            .findOneAndUpdaate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        db.Book 
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.deleteOne())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    } 
};