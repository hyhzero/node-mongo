'use strict';

const fs = require('fs')
const path = require('path')
// 引入模型
const Paper = require('../model/paper.js');
const { pathToFileURL } = require('url');


// 增加单个文档
async function addPaper(paper){
    // 查询是否已存在
    try {
        const res = await Paper.findOne(paper);

        // 已存在
        if (res){
            return ['已存在，不可重复添加', null]
        }
        // 创建文档对象
        const doc = new Paper(paper);
        const result = await doc.save();
        console.log('res ' + result)
        return [null, result];

    } catch (error) {
        console.log('error ' + error.message)
        return [error.message, null]
    }
    
}


// 查找单个文档
async function searchPaper(query){
    return await Paper.find(query)
}

// 删除单个文档
async function removePaper(id){
    return await Paper.findByIdAndDelete(id)
}

// 修改单个文档
async function updatePaper(id, update){
    return await Paper.findByIdAndUpdate(id, update)
}


exports.addPaper = addPaper
exports.searchPaper = searchPaper
exports.removePaper = removePaper
exports.updatePaper = updatePaper



