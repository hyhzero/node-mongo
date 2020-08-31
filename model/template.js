'use strict';

const mongoose = require('./db.js');

const TemplateSchema = mongoose.Schema({
    activity: String,   // 活动名称
    role: String,       // 人员角色
    template: String,   // 模板类型 详细/概要
    url: String         // 下载链接
})

const Template = mongoose.model('Template', TemplateSchema, 'templates')

module.exports = Template