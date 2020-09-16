const Template = require('./model/templates.js');
const fs = require('fs');

const templs = fs.readFileSync('template.json', 'utf-8')


Template.insertMany(JSON.parse(templs))
.then(res => console.log(res.length))
.catch(error => console.log(error))