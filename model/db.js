// 引入
const mongoose = require('mongoose')

// 连接
mongoose.connect('mongodb://localhost/zero', { useUnifiedTopology: true })

module.exports = mongoose