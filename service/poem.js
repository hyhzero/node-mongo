const Poem = require('../model/poem.js')

const fs = require('fs')
const path = require('path')

// 查询所有
async function SearchAllPoems(){
    return await Poem.find({})
}

// search by id
async function SearchPoemsById(id){
    return await Poem.find({id: id})
}

// 添加多首诗
async function AddPoems(){
    const poemRaw = fs.readFileSync(path.resolve(__dirname, '../public/300.json'));
    const poems = JSON.parse(poemRaw)
    return await Poem.insertMany(poems)
}

// 添加一首诗
async function AddOnePoem(poem){
    const doc = new Poem(poem)
    return await doc.save()
}

// 更新一首诗
async function UpdateOnePoem(id, poem){
    return await Poem.updateOne({id: id}, poem)
}


// 删除一首诗
async function DeleteOnePoem(id, poem){
    return await Poem.deleteOne({id: id})
}


// 删除多首诗
async function DeleteManyPoems(condition){
    return await Poem.deleteMany(condition)
}


exports.SearchAllPoems = SearchAllPoems
exports.SearchPoemsById = SearchPoemsById
exports.AddPoems = AddPoems
exports.AddOnePoem = AddOnePoem
exports.UpdateOnePoem = UpdateOnePoem
exports.DeleteOnePoem = DeleteOnePoem
exports.DeleteManyPoems = DeleteManyPoems

// 插入多条数据


// Poem.insertMany(poems, (error, doc) => {
//     if (error) {
//         console.log(error)
//         return;
//     }

//     console.log(doc.length)
// })


// 插入单条数据
// const poemRaw = fs.readFileSync(path.resolve(__dirname, './public/300.json'));
// const poems = JSON.parse(poemRaw)

// console.log(poems[0])

// const poem = new Poem(poems[0])
// poem.save(error => {
//     if (error) {
//         console.log(error)
//         return;
//     }

//     console.log('success')
// })


// 更新数据

// Poem.updateOne({id: 1}, {type: "五言古诗 + 1"}, (error, res) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     console.log(res)
// })


// 删除数据
// Poem.findOneAndDelete({id: 1}, (error, res) => {
//     if (error){
//         console.log(error)
//     }else{
//         console.log(res)
//     }
// })

// 删除多条数据
// Poem.deleteMany({id: 11}, (error, doc) => {
//     if (error){
//         console.log(error)
//     }else{
//         console.log(doc)
//     }
// })
