const poemService = require('./service/poem.js')

// 查询
// poemService.SearchPoemsById(19)
// .then(doc => console.log(doc))
// .catch(error => console.log(error))


// 增加多条
// poemService.AddPoems()
// .then(doc => console.log(doc))
// .catch(error => console.log(error))

// 增加一条
// poem =   {
//     "id": 2,
//     "contents": "兰叶春葳蕤，桂华秋皎洁。\n欣欣此生意，自尔为佳节。\n谁知林栖者，闻风坐相悦。\n草木有本心，何求美人折？",
//     "type": "五言古诗",
//     "author": "张九龄",
//     "title": "感遇四首之二"
//   }
// poemService.AddOnePoem()
// .then(doc => console.log(doc))
// .catch(error => console.log(error))

// 更新一首诗
// poemService.UpdateOnePoem(1, {author: "张九龄 + 1"})
// .then(doc => console.log(doc))
// .catch(error => console.log(error))

// 删除一首诗
// poemService.DeleteOnePoem(1)
// .then(doc => console.log(doc))
// .catch(error => console.log(error))

// 删除多首诗
poemService.DeleteManyPoems({})
.then(doc => console.log(doc))
.catch(error => console.log(error))



// const Poem = require('./model/poem.js')
// const NumberInt = require('mongoose-int32');

// const fs = require('fs')
// const path = require('path')



// 查询
// Poem.find({}, (error, doc) => {
//     if(error){
//         console.log(error)
//         return
//     }
//     console.log(doc)
// })

// 插入多条数据
// const poemRaw = fs.readFileSync(path.resolve(__dirname, './public/300.json'));
// const poems = JSON.parse(poemRaw)

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

// // 删除多条数据
// Poem.deleteMany({id: 11}, (error, doc) => {
//     if (error){
//         console.log(error)
//     }else{
//         console.log(doc)
//     }
// })
