'use strict';

const mongoose = require('./db.js');

const ChapterDocSchema = mongoose.Schema({
    role: String,
    template: String,
    level1: String,
    level2: String,
    level3: String,
    url: String
})

const Chapterdoc = mongoose.model('Chapterdoc', ChapterDocSchema, 'chapterdocs');

module.exports = Chapterdoc;