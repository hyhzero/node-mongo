const User = require('./model/user.js')

// 查询
User.find({}, (error, doc) => {
    if(error){
        console.log(error)
        return
    }
    console.log(doc)
})


// 增加
// const u = new User({
//     username: "yhhan",
//     password: "yhhan"
// })

// u.save((error) => {
//     if (error){
//         console.log(error)
//         return
//     }
//     console.log("成功")
// })


// // 更新
// User.updateOne({username: 'zero'}, {
//     password: "123456"
// }, (error, res) => {
//     if (error){
//         console.log(error)
//         return
//     }

//     console.log(res)
// })



// // 删除文档
// User.remove({username: "yhhan"}, error => {
//     if (error){
//         console.log(error)
//         return
//     }
//     console.log('success')
// })
