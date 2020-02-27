//导入a.js文件
const a = require('./a.js')
console.log('我是b。js文件')
console.log(a.n1)


//path模块，直接导入就行

const res = require('path')
console.log(res.join('a','b','c'))
console.log(__filename)