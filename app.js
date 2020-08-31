const paperService = require('./service/paper.js');
const templateService = require('./service/template');

//增加单个文档
// paper = {
//         "title": "淄博市水平衡测试工作实践与探索", 
//         "abstract": "水平衡测试工作,既可以帮助企业查找跑、冒、滴、漏等水资源浪费问题,科学分析用水现状,查找不合理用水环节,制定出切实可行的技术和管理措施,改进用水工艺,提高水资源重复利用率,还可以帮助企业建立完善用水三级计量体系和档案管理体系,规范用水管理程序,提高用水节水管理水平。同时,水平衡测试成果还为有关管理部门科学编制用水定额、制定中长期节水规划、确定取水许可水量和年度用水计划指标、评价企业用水合理性、优化节水技改方案等提供重要的技术支撑。", 
//         "keyword": ["淄博市", "水平衡测试", "节约用水"], 
//         "category": "工具与模板", 
//         "subject": "地面", 
//         "url": "/public/constraint/淄博市水平衡测试工作实践与探索.docx", 
//         "activity": "编写系统详细测试计划", 
//         "role": "测试人员", 
//         "template": "软件详细设计说明"}

// paperService.addPaper(paper)
// .then(doc => console.log(doc)) // 成功则返回当前插入的记录，JSON格式
// .catch(error => console.log(error))



//查找文档
// query = {
//     template: '软件详细设计说',
//     role: '测试人员',
//     activity: '编写系统详细测试计划'
// }

// paperService.searchPaper(query)
// .then(doc => console.log(doc)) // 成功则返回数组，元素为JSON格式，不存在则为[]
// .catch(error => console.log(error.message))



// // 删除文档
// id = "5f2f4c96c580fe329cb62a16"
// paperService.removePaper(id)
// .then(doc => console.log(doc)) // 成功则返回删除的文档，JSON格式，不存在则为null
// .catch(error => console.log(error.message))


//更新文档
// id = "5f2d3b946ddf9cb30f43142"
// update = {
//     subject: "地面"
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
模板管理
=====================================
*/


// 增加多个模板记录
// templateService.addTemplates([{"activity": "软件概要设计说明", "role": "研制人员", "template": "软件概要设计说明", "url": "/public/template/软件概要设计说明.doc"}, {"activity": "软件概要设计说明", "role": "测试人员", "template": "编写系统概要测试计划", "url": "/public/template/编写系统概要测试计划.doc"}, {"activity": "软件概要设计说明", "role": "质量保证人员", "template": "软件概要设计活动检查", "url": "/public/template/软件概要设计活动检查.doc"}, {"activity": "软件概要设计说明", "role": "质量保证人员", "template": "软件概要设计说明检查", "url": "/public/template/软件概要设计说明检查.doc"}, {"activity": "软件概要设计说明", "role": "质量保证人员", "template": "软件概要设计评审", "url": "/public/template/软件概要设计评审.doc"}, {"activity": "软件概要设计说明", "role": "配置管理人员", "template": "软件概要设计物理审核", "url": "/public/template/软件概要设计物理审核.doc"}, {"activity": "软件详细设计说明", "role": "研制人员", "template": "软件详细设计说明", "url": "/public/template/软件详细设计说明.doc"}, {"activity": "软件详细设计说明", "role": "测试人员", "template": "编写系统详细测试计划", "url": "/public/template/编写系统详细测试计划.doc"}, {"activity": "软件详细设计说明", "role": "质量保证人员", "template": "软件详细设计活动检查", "url": "/public/template/软件详细设计活动检查.doc"}, {"activity": "软件详细设计说明", "role": "质量保证人员", "template": "软件详细设计说明检查", "url": "/public/template/软件详细设计说明检查.doc"}, {"activity": "软件详细设计说明", "role": "质量保证人员", "template": "软件详细设计评审", "url": "/public/template/软件详细设计评审.doc"}, {"activity": "软件详细设计说明", "role": "配置管理人员", "template": "软件详细设计物理审核", "url": "/public/template/软件详细设计物理审核.doc"}])
// .then(doc => console.log(doc))
// .catch(error => console.log(error.message));

// 查找模板记录
const query = {
    activity: "软件概要设计说明",
    role: "研制人员",
    template: "软件概要设计说明"
}
// templateService.searchTemplates(query)
// .then(doc => console.log(doc))
// .catch(error => console.log(error.message));

// 统计
templateService.countSearch({activity: "软件概要设计说明"})
.then(doc => console.log(doc))
.catch(error => console.log(error.message))
