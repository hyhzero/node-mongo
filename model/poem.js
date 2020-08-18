'use strict';

const mongoose = require('./db.js')

// 定义Schema
const PoemSchema = mongoose.Schema({
    id: Number,
    contents: String,
    type: String,
    author: String,
    title: String
})


// 定义model
const Poem = mongoose.model('Poem', PoemSchema, 'poems')

module.exports = Poem