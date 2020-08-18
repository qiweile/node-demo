// 导包
var mysql = require('mysql');
// 配置包
var connection = mysql.createConnection({
    host: 'localhost', // 主机名
    user: 'root', // 用户名
    password: 'root', // 密码
    database: 'msg' // 数据库名称
});
// 连接数据库 // 执行query方法时会自动连接数据库
connection.connect();
// connection.query(sql语句，可选参数，cb回调函数)
// cb(错误参数，结果参数，)
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The so  lution is: ', results[0].solution);
});
connection.end();