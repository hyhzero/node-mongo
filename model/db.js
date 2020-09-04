// 引入
const mongoose = require('mongoose')

// 连接
mongoose.connect('mongodb://localhost/zero', { useUnifiedTopology: true,  useNewUrlParser: true })

module.exports = mongoose;