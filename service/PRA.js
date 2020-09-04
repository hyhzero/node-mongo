'use strict';

const fs = require('fs')
const path = require('path')

// 引入模型
const mongoose = require('../model/db.js');
const PRA = require('../model/PRA.js');
const Paper = require('../model/paper.js');


// 增加单个pra(流程-角色-活动)
async function addPRA(pra){
    // 查询是否已存在
    try {
        const res = await PRA.findOne(pra);

        // 已存在
        if (res){
            return ['已存在，不可重复添加', null]
        }
        // 创建文档对象
        const doc = new PRA(pra);
        const result = await doc.save();
        console.log('res ' + result)
        return [null, result];

    } catch (error) {
        console.log('error ' + error.message)
        return [error.message, null]
    }
    
}


// 查询pra(流程-角色-活动)
async function searchPRA(query){
    return await PRA.find(query)
}

// 删除单个pra(流程-角色-活动)
async function removePRA(id){
    // 使用mongodb中的事务，删除pra的同时删除与之相关的文档。
    const session = mongoose.startSession();
    (await session).startTransaction();
    try {
        var pra = await PRA.findById(id);
        const query = {'process': pra.process, 'role': pra.role, 'activity': pra.activity};
        await PRA.findByIdAndRemove(id);
        await Paper.deleteMany(query);
        (await session).commitTransaction();
    } catch (error) {
        (await session).abortTransaction();
        throw error;
    } finally {
        (await session).endSession();
    }
}

// 修改单个pra(流程-角色-活动)
async function updatePRA(id, update){
    // 使用mongodb中的事务，修改pra的同时修改与之相关的文档对应的字段
    const session = mongoose.startSession();
    (await session).startTransaction();
    try {
        var pra = await PRA.findById(id);
        const query = {'process': pra.process, 'role': pra.role, 'activity': pra.activity};
        await PRA.findByIdAndUpdate(id, update);
        await Paper.updateMany(query, update);
        (await session).commitTransaction();
    } catch (error) {
        (await session).abortTransaction();
        throw error;
    } finally {
        (await session).endSession();
    }
}

exports.addPRA = addPRA
exports.searchPRA = searchPRA
exports.removePRA = removePRA
exports.updatePRA = updatePRA