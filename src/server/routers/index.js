const express = require('express');

const Router = express.Router();

const goodsRouter = require('./goods');
const regRouter = require('./reg');
const loginRouter = require('./login');
const uploadRouter = require('./upload');
const homeRouter = require('./home');
const zixunRouter = require('./zixun');
const newcomerRouter = require('./newcomer');
const cartoonRouter = require('./cartoon');
const educationRouter = require('./education');
const farmerRouter = require('./farmer');
const hotRouter = require('./hot');
const huixiangRouter = require('./huixiang');
const jihusRouter = require('./jihua');
const zhimakaihuaRouter = require('./zhimakaihua');
const sirendingzhiRouter = require('./sirendingzhi');

const {formatData,token:{verify}} = require('../utils');


Router.use(express.urlencoded({extended:false}),express.json());

//运行:127.0.0.1:1904,localhost:1904,baidu.com

let allowOrigin = ['http://127.0.0.1:1904','http://baidu.com','http://localhost:8080']

Router.use((req,res,next)=>{
    // req.header保存前端发来的请求头信息,包含host,origin
    console.log(req.headers)
    // 设置跨域响应头
    // 判断当前域名是否在allowOrigin当中,如果在,则设置响应头,否则不设置
    let idx;
    let has = allowOrigin.some((item,i)=>{
        console.log(item,i,req.headers.origin)
        idx = i;
        return item.includes(req.headers.origin)
    });
    // if(has){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS,PATCH");
    // }

    // 跨域请求CORS中的预请求
    // OPTIONS:预请求(当跨域请求为复杂请求时,浏览器自动发起,目的是询问服务器是否支持这样的跨域请求)
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        
        next();
    }

    
})

// 数据接口
Router.use('/goods',goodsRouter);
Router.use('/reg',regRouter);
Router.use('/login',loginRouter);
Router.use('/upload',uploadRouter);
Router.use('/home',homeRouter);
Router.use('/zixun',zixunRouter);
Router.use('/newcomer',newcomerRouter);
Router.use('/cartoon',cartoonRouter);
Router.use('/education',educationRouter);
Router.use('/farmer',farmerRouter);
Router.use('/hot',hotRouter);
Router.use('/enjoy',huixiangRouter);//翼农惠享
Router.use('/plan',jihusRouter);//翼农计划
Router.use('/zhimakaihua',zhimakaihuaRouter);//芝麻开花
Router.use('/sirendingzhi',sirendingzhiRouter);//私人定制



// 校验token
Router.use('/verify',(req,res)=>{
    // 校验token
    // 成功：放行
    // 失败：
    let token = req.headers.authorization;console.log('mytoken:',token)
    if(!verify(token)){
        res.send(formatData({code:401,msg:'unauthorized'}))
    }else{
        res.send(formatData())
    }
});




module.exports = Router;