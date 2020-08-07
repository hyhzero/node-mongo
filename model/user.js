const mongoose = require('./db.js')
// 定义schema
const UserSchema = mongoose.Schema({
    username: String,
    password: String
})

// 生成model
const User = mongoose.model('User', UserSchema, 'user')

module.exports = User
