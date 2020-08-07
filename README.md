# node-mongo

mongoose的基本使用。mongoose是node.js异步环境下对mongodb进行操作的对象模型工具。它有两个特点：

- 通过关系型数据库的思想设计非关系型数据库
- 基于mongodb的驱动，简化操作


### 安装使用

1. 安装

    ```
    npm i -S mongoose
    ```

2. mongoose连接数据库

    ```
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost/test')

    // 有账户密码
    mongoose.connect('mongodb://username:password@localhost/test')
    ```

3. 定义schema

    表的结构定义，每个schema会映射到数据库中的一个collection，schema不具备操作数据库的能力。
    ``` js
        const UserSchema = mongoose.Schema({
            username: String,
            password: String
        })

    ```

4. 创建数据模型

    由定义好的Schema生成Model，可以操作数据。
    ``` js
        // 参数1 模型名称
        // 参数2 Schema
        // 参数3 模型要映射到的Collection名称
        const User = mongoose.model('User', UserSchema, 'user')
    ```

### 操作数据

- 查询文档
  
  ``` js
  User.find({}, (error, doc) => {
    if (error) {
        console.log(error)
        return
    }

    console.log(doc)
  })

  ```

- 增加文档

  ``` js
  const u = User({
    username: "yhhan",
    password: "yhhan"
  })

  u.save((error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("success")
  })
  ```


- 更新文档

  ``` js
  User.updateOne({username: "yhhan"}, {"password": "123456"}, (error, res) => {
    if (error) {
        console.log(error)
        return
    }
    console.log(res)
  })
  ```

- 删除文档



### mongoose的默认参数和模块化

默认参数

``` js
// 连接数据库
// 参数2 options
// 参数3 连接数据库的回调函数
mongoose.connect('mongodb://localhost/zero', { useUnifiedTopology: true }, error => {
    if (error) {
        console.log(error)
        return
    }
    
    console.log('数据库连接成功')
})


// 定义Schema
// 在增加文档时可以省略password使用默认参数值
const UserSchema = mongoose.Schema({
    username: {type: String}
    password: {type: String, default: '123'}
})


```

模块化

``` js

// ./model/db.js
// 引入
const mongoose = require('mongoose')

// 连接
mongoose.connect('mongodb://localhost/zero', { useUnifiedTopology: true })

module.exports = mongoose


// ./model/user.js

const mongoose = require('./db.js')
// 定义schema
const UserSchema = mongoose.Schema({
    username: String,
    password: String
})

// 生成model
const User = mongoose.model('User', UserSchema, 'user')

module.exports = User


// ./app.js

const User = require('./model/user.js')

User.find({}, (error, doc) => {
    if (error) {
        console.log(error)
        return
    }
    console.log(doc)
})

```