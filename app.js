/**
 * RESTful API From Scratch Using Node, Express and MongoDB
 * SOURCE FILES - https://github.com/bradtraversy/bookstore
 * siehe 001_BradTraversy-bookstere.md
 *
 * @type {*|exports|module.exports}
 */

//relevante Module einbinden
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');

Genre = require('./models/genre');
Book = require('./models/book');

// App konfigurieren
var app = express();

// GET // http://localhost:3000/ // :)
// ==> D:\1. hk\node_ws\bookstore\client\index.html
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

// Connect to Mongoose
//mongoose/issues/3049 // :( !!!
//mongoose.connect('mongodb://localhost/bookstore');
mongoose.connect('mongodb://127.0.0.1/bookstore');
var db = mongoose.connection;

// REST-Services implementieren
// GET // http://localhost:3000/ // :)
//app.get('/', function (req, res) {
//    res.send('Please use /api/books or /api/genres');
//});

/// Genres ///
// GET -> select // http://localhost:3000/api/genres // :)
app.get('/api/genres', function (req, res) {
    Genre.getGenres(function (err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    });
});

// POST-> insert // http://localhost:3000/api/genres //
app.post('/api/genres', function (req, res) {
    var genre = req.body;
    Genre.addGenre(genre, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
});

// PUT -> update // http://localhost:3000/api/genres/56fb98ea1f5d54313cd68e78 //
app.put('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
});

// DELETE // http://localhost:3000/api/genres/56fb98ea1f5d54313cd68e78 //
app.delete('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    Genre.removeGenre(id, function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    });
});

/// Books ///
// GET -> select // http://localhost:3000/api/books //:)
app.get('/api/books', function (req, res) {
    Book.getBooks(function (err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    });
});

// GET -> select // http://localhost:3000/api/books/56fe958ec276c6680da8f0ae // :)
app.get('/api/books/:_id', function (req, res) {
    Book.getBookById(req.params._id, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

// POST -> http://localhost:3000/api/books // :)
app.post('/api/books', function (req, res) {
    var book = req.body;
    Book.addBook(book, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

// PUT -> update // http://localhost:3000/api/books //
app.put('/api/books/:_id', function (req, res) {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

// DELETE // http://localhost:3000/api/books/56fe958ec276c6680da8f0ae // :)
app.delete('/api/books/:_id', function (req, res) {
    var id = req.params._id;
    Book.removeBook(id, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

app.listen(3000);
console.log('Running on port 3000...');