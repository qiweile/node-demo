/***在package.json文件中将 nodemon app.js 替换为 nodemon appWebSocket.js 就可以运行了*/
//引入websocket 的ws模块
var WebSocketServer = require('ws').Server,
    //初始化websocket对象
    wss = new WebSocketServer({ port: 12345 });
//连接建立后
wss.on('connection', function (ws) {
    //项客户端传递数据
    var sendStockUpdates = function (ws) {
        if (ws.readyState == 1) {  //readyState为1表示已经建立连接
            ws.send(JSON.stringify(new Date()));//需要将对象转成字符串。WebSocket只支持文本和二进制数据
        }
    }
    //服务器端定时更新响应数据
    var clientStockUpdater = setInterval(function () {
        sendStockUpdates(ws);
    }, 1000);
    //接收客户端的请求参数，根据请求的数据更新响应数据
    ws.on('message', function (message) {
        var stockRequest = JSON.parse(message);
        console.log("服务器收到的消息：", stockRequest);
        sendStockUpdates(ws);
    });
})