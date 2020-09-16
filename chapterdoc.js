const Template = require('./model/chapterdoc.js');
const fs = require('fs');

const templs = fs.readFileSync('docs.json', 'utf-8')


Template.insertMany(JSON.parse(templs))
.then(res => console.log(res.length))
.catch(error => console.log(error))