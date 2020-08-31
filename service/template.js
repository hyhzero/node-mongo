'use strict';

const fs = require('fs')
const path = require('path')

// 引入模型
const Template = require('../model/template.js');


// 增加多个模板记录
async function addTemplates(templates){
    return await Template.insertMany(templates);
    
}

// 查找模板记录
async function searchTemplates(query) {
    return await Template.findOne(query);
}

// 查询计数
async function countSearch(query) {
    return await Template.find(query).skip(0).limit(10).countDocuments();
}

exports.addTemplates = addTemplates;
exports.searchTemplates = searchTemplates;
exports.countSearch = countSearch;