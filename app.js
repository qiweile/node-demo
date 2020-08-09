// 程序入口文件

// 1导包
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

// 视图模板 必须用它来找views /.html并且可以解析它 -> 安装ejs
const ejs = require('ejs')

// 3app对象
const app = express();

// 3. 配置包
app.engine('html', require('express-art-template'));

// 如果想让他解析html，js
app.engine('ejs', ejs.renderFile)
// 优化一步
// app.engine('ejs', require('ejs').renderFile);

// 如果想让他解析jsp文件(安全性高)
app.engine('jsp', ejs.renderFile);

// 如果想让他解析ejs
app.set('view engine', 'ejs');

// 第一个参数是视图模板（固定），第二个参数是视图模板所在的位置，默认express框架把views文件夹当成视图文件的位置
app.set('views', './web')

// 处理静态资源
app.use('/web', express.static('./web'));

// 支持post请求
app.use(bodyParser.urlencoded({
    extended: false
}));

// 使用router路由
app.use(router);

// 4. 绑定端口
app.listen(12345, () => {
    console.log('run it');
});