// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['FICTION', 'NONFICTION'],
        required: true
    },
    priority: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Books = mongoose.model('Book', bookSchema);

// make this available to our Node applications
module.exports = Books;