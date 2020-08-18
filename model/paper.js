'use strict';

const mongoose = require('./db.js')

const PaperSchema = mongoose.Schema({
    template: String,   // 模板类型 详细/概要
    role: String,       // 人员角色
    activity: String,   // 活动名称
    title: String,      // 文档标题
    abstract: String,   // 文档摘要
    keyword: Array,     // 文档关键词
    category: String,   // 文档类型
    subject: String,    // 文档主题
    url: String         // 文档下载链接
})

const Paper = mongoose.model('Paper', PaperSchema, 'papers')

module.exports = Paper