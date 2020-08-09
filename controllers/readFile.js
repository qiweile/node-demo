const fs = require('fs')

exports.getData = (req,getRes,next) => {
    // 此处的 ./ 表示的是node命令执行的路径，而不是相对于正在执行这个js文件来查找hello.txt, 在node全局下会发生这样的错误
    fs.readFile('./datas/index.json','utf8',(err,data) => {
        if(err) {
            throw err
        }
        // 直接返回数据
        // res.send(data)
        data = JSON.parse(data)
        // 第一个参数是视图的名称，如果是.ejs文件，必须省略后缀名，
        // 如果是.html,.jsp,.abc,.def等自己定义的后缀名时，必须加后缀。
        // 第二个参数是视图需要的数据
        getRes.render('index.html', data)
    })
}
exports.signin = (req,getRes,next) => {
    // 此处的 ./ 表示的是node命令执行的路径，而不是相对于正在执行这个js文件来查找hello.txt, 在node全局下会发生这样的错误
    fs.readFile('./datas/index.json','utf8',(err,data) => {
        if(err) {
            throw err
        }
        // 直接返回数据
        // res.send(data)
        data = JSON.parse(data)
        // 第一个参数是视图的名称，如果是.ejs文件，必须省略后缀名，
        // 如果是.html,.jsp,.abc,.def等自己定义的后缀名时，必须加后缀。
        // 第二个参数是视图需要的数据
        getRes.render('index', data)
    })
}