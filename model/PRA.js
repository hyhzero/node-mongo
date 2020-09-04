'use strict';

const mongoose = require('./db.js');

const PRASchema = mongoose.Schema({
    process: String,    // 项目流程
    role: String,       // 人员角色
    activity: String   // 活动名称
})

const PRA = mongoose.model('pra', PRASchema, 'pras');

module.exports = PRA;