var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Books = require('../models/books');

var bookRouter = express.Router();
bookRouter.use(bodyParser.json());

bookRouter.route('/')
.get(function (req, res, next) {
    Books.find({}, function (err, book) {
        if (err) throw err;
        res.json(book);
    });
})

.post(function (req, res, next) {
    Books.create(req.body, function (err, book) {
        if (err) console.log(err.errors);
        console.log('Book created!');

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the book');
    });
})

.delete(function (req, res, next) {
    Books.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

bookRouter.route('/:bookId')
.get(function (req, res, next) {
    Books.findById(req.params.bookId, function (err, book) {
        if (err) throw err;
        res.json(book);
    });
})

.put(function (req, res, next) {
    Books.findByIdAndUpdate(req.params.bookId, {
        $set: req.body
    }, {
        new: true
    }, function (err, book) {
        if (err) throw err;
        res.json(book);
    });
})

.delete(function (req, res, next) {
    Books.findByIdAndRemove(req.params.bookId, function (err, resp) {        
        if (err) throw err;
        res.json(resp);
    });
});

bookRouter.route('/category/:categoryName')
.get(function(req, res, next) {
    Books.find({'category': req.params.categoryName}, function(err, book){
        if (err) throw errl
        res.json(book);
    })
});

module.exports = bookRouter;