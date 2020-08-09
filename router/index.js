const express = require('express');
// 导入控制器文件
const getData = require('../controllers/readFile');
// const c_topic = require('./controllers/c_topic');
const router = express.Router();
// 渲染登录页的请求
// router.get('/signin', c_user.showSignin)
// // 监听登录的表单请求
router.get('/signin', getData.signin)
// 渲染话题页
router.get('/', getData.getData)
module.exports = router