const paperService = require('./service/paper.js');
const PRAService = require('./service/PRA.js');
const PRA = require('./model/PRA.js');
const { estimatedDocumentCount } = require('./model/PRA.js');

// 增加单个文档
const paper = {
    "process": "软件详细设计说明",
    "role": "测试人员", 
    "activity": "编写系统详细测试计划", 
    "title": "淄博市水平衡测试工作实践与探索", 
    "abstract": "水平衡测试工作,既可以帮助企业查找跑、冒、滴、漏等水资源浪费问题,科学分析用水现状,查找不合理用水环节,制定出切实可行的技术和管理措施,改进用水工艺,提高水资源重复利用率,还可以帮助企业建立完善用水三级计量体系和档案管理体系,规范用水管理程序,提高用水节水管理水平。同时,水平衡测试成果还为有关管理部门科学编制用水定额、制定中长期节水规划、确定取水许可水量和年度用水计划指标、评价企业用水合理性、优化节水技改方案等提供重要的技术支撑。", 
    "keyword": ["淄博市", "水平衡测试", "节约用水"], 
    "category": "工具与模板", 
    "url": "/public/constraint/淄博市水平衡测试工作实践与探索.docx"
}

paperService.addPaper(paper)
.then(doc => console.log(doc)) // 成功则返回当前插入的记录，JSON格式
.catch(error => console.log(error))



// 查找文档
// const query = {
//     process: '系统详细测试',
//     role: '测试人员',
//     activity: '编写系统详细测试计划'
// }

// paperService.searchPaper(query)
// .then(doc => console.log(doc)) // 成功则返回数组，元素为JSON格式，不存在则为[]
// .catch(error => console.log(error.message))



// // 删除文档
// const id = "5f4c46cbb6d3710dd04792d8"
// paperService.removePaper(id)
// .then(doc => console.log(doc)) // 成功则返回删除的文档，JSON格式，不存在则为null
// .catch(error => console.log(error.message))


// // 更新文档
// const id = "5f4c46cbb6d3710dd04792d8"
// const update = {
//     category: "工具"
// }
// paperService.updatePaper(id, update)
// .then(doc => console.log(doc))  // 成功更新则返回当前更新的记录，JSON格式，不存在则返回null
// .catch(error => console.log('error ' + error))  // 如果id长度不够会报错


// 关键词查询文档
// paperService.searchByKeyword("淄博", {'category': '作业指导书'})
// .then(doc => console.log(doc))
// .catch(error => console.log(error.message))


// 创建索引
// paperService.createMyIndex()
// .then(doc => console.log(doc))
// .catch(error => console.log(error.message))



/*
=====================================
PRA(流程-角色-活动)管理
=====================================
*/

// 增加单个pra
const pra = {
    "process": "软件详细设计说明",
    "role": "测试人员", 
    "activity": "编写系统详细测试计划", 
}

PRAService.addPRA(pra)
.then(doc => console.log(doc)) // 成功则返回当前插入的记录，JSON格式
.catch(error => console.log(error))



// // 查找文档
// const query = {
//     process: "软件详细设计说明",
//     role: '测试人员',
//     activity: '编写系统详细测试计划'
// }

// PRAService.searchPRA(query)
// .then(doc => console.log(doc)) // 成功则返回数组，元素为JSON格式，不存在则为[]
// .catch(error => console.log(error.message))



// // 删除单个pra同时删除与之相关的文档
// const id = "5f5192ce4a7474409856765e"
// PRAService.removePRA(id)
// .then(() => {

// })
// .catch(error => console.log(error.message))


// 更新pra
// const id = "5f519577b3bf2f05d4cdc7bf"
// const update = {
//     // role: "开发人员"
//     process: "软件概要设计说明"
// }
// PRAService.updatePRA(id, update)
// .then()  // 成功更新则返回当前更新的记录，JSON格式，不存在则返回null
// .catch(error => console.log(error.message))  // 如果id长度不够会报错