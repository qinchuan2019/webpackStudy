/**
 * 
 */

const path = require('path');

//通过node中的模块操作，向外暴露一个配置对象
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),//入口，表示要用webpack打包哪个文件
    output:{//输出文件相关配置
        path:path.join(__dirname,'./dist'),//指定打包好的文件输出到哪个目录
        filename:'bundle.js'
    }
}