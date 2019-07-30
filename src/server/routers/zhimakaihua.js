const express = require('express');

const Router = express.Router();
const {formatData} = require('../utils');
const {mysql:query} = require('../db');

Router.route('/')
// 获取所有数据
.get((req,res)=>{
    query('SELECT * from zhimakaihua ORDER BY title DESC').then(function(data){
        res.send(formatData({data}))
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })
})



// 增加单个商品
.post((req,res)=>{
    console.log('params:',req.body);//{name,price,category,imgurl,...}

    let id = Date.now();

    let names = '',values = '';
    for(let key in req.body){
        names += key + ',';
        values += '"' + req.body[key] + '",'
    }

    // 去除多余逗号
    names = names.slice(0,-1)
    values = values.slice(0,-1)

    let sql = `insert into goods(${names}) values(${values})`;

    query(sql).then(data=>{
        res.send(formatData({data}))
    }).catch(err=>{
        res.send(formatData({
            data:err,
            code:250
        }))
    })

    
});



Router.route('/:id')

// 修改单个商品
// put
.patch((req,res)=>{
    // 请求体中的参数会被express格式化到req.body
    console.log('params:',req.params);
    console.log('body:',req.body);

    let {id} = req.params;
    
    let opt=''; // name="xxx", price="998"
    for(let key in req.body){
        opt += `${key}='${req.body[key]}',`
    }

    // 去除多余逗号
    opt = opt.slice(0,-1)


    let sql = `update goods set ${opt} where id=${id}`;

    query(sql).then(data=>{
        res.send(formatData({data}))
    }).catch(err=>{
        res.send(formatData({
            data:err,
            code:250
        }))
    })
    
})



// 获取单个商品
.get((req,res)=>{
    // 动态路由: 参数id会被express格式化到req.params
    let {id} = req.params;
    console.log('params:',req.params)

    query(`select * from goods where id=${id}`).then(function(data){
        // data: promise对象改成resolve状态时传回的参数
        res.send(formatData({data}))
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})

// 删除单个商品
.delete((req,res)=>{
    // 动态路由: 参数id会被express格式化到req.params
    let {id} = req.params;
    console.log('params:',req.params)


    let sql = `delete from goods where id=${id}`;

    query(sql).then(data=>{
        res.send(formatData());
    }).catch(err=>{
        res.send(formatData({data:err,code:250}))
    })
});


module.exports = Router;