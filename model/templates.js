'use strict';

const mongoose = require('./db.js');

const TemplateSchema = mongoose.Schema({
    role: String,
    template: String,
    level1: String,
    level2: String,
    level3: String,
    url: String
})

const Template = mongoose.model('Template', TemplateSchema, 'templates');

module.exports = Template;