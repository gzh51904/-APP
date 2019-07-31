# 翼龙贷APP

## 项目截图：

#### APP截图

![微信截图_20190730205944](C:\Users\Administrator\Desktop\微信截图_20190730205944.png)

![微信截图_20190730210006](C:\Users\Administrator\Desktop\微信截图_20190730210006.png)

![微信截图_20190730210019](C:\Users\Administrator\Desktop\微信截图_20190730210019.png)

![微信截图_20190730210044](C:\Users\Administrator\Desktop\微信截图_20190730210044.png)







#### 后台管理系统

![home](F:\feiq\Recv Files\pics\home.png)

![login](F:\feiq\Recv Files\pics\login.png)

![resetpsw](F:\feiq\Recv Files\pics\resetpsw.png)







## 团队与分工

  #### 组长：蒋铮华
  #### 组员：甘丽云、朱伟、高仕琛



github仓库地址：git@github.com:gzh51904/Yilong-APP.git




  ### 负责模块说明：
  蒋铮华：后台管理部分样式、密码重置、数据渲染；前后端api接口；数据库；APP注册页；

  甘丽云：后台管理样式设计与排版、登录页以及增删改查；前后端api接口；数据库；路由配置；

  朱伟：产品页数据渲染、发现页数据渲染、数据爬取；

  高仕琛：首页数据渲染、我的页面数据渲染、数据爬取。

  ### APP项目目录说明
|-- babel.config.js     
|-- baiyangApp        //master分支
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   `-- index.html
|-- readme.md     //项目说明
|-- server            /node写的服务说明
|   |-- config.json
|   |-- db              //连接数据库文件
|   |   |-- index.js
|   |   |-- mongo.js    //连接moogo
|   |   `-- mysql.js      //连接mysql
|   |-- package-lock.json
|   |-- package.json
|   |-- routers             //路由文件
|   |   |-- chepho.js
|   |   |-- goods.js
|   |   |-- index.js
|   |   |-- login.js
|   |   |-- reg.js
|   |   `-- upload.js
|   |-- server.js
|   |-- uploads
|   |   |-- avatar-1562572819413.jpg
|   |   |-- avatar-1562573056117.jpg
|   |   |-- avatar-1562573147415.jpg
|   |   |-- avatar-1562573223825.jpg
|   |   |-- avatar-1562573251668.jpg
|   |   |-- avatar-1562573272116.png
|   |   `-- f74f073d94b6609cd4a17e4090a36a96.jpg
|   `-- utils               //校验文件
|       |-- index.js
|       `-- token.js
`-- src
    |-- App.js          //父组件
    |-- assets             //资源文件
    |   |-- css
    |   |-- iconfont
    |   |-- img
    |   |-- js
    |   |-- logo.png
    |   `-- pinpaiimg
    |-- eventjs.js
    |-- main.js              //主要js代码
    |-- package-lock.json
    |-- router.js            //配置路由文件
    |-- static               //静态资源文件
    |   `-- img          
    |-- pages               //子组件视图层文件
    |   |-- home.js
    |   |-- product.js
    |   |-- discovery.js
    |   |-- mine.js
    |   |-- login.js
    |   |-- register.js

  ### 后台管理系统目录说明      
    .
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   `-- manifest.json
    |-- server
    |   |-- config.json
    |   |-- db
    |   |   |-- index.js
    |   |   |-- mongo.js
    |   |   `-- mysql.js
    |   |-- routers
    |   |   |-- admin.js
    |   |   |-- adminLogin.js
    |   |   |-- cartoon.js
    |   |   |-- education.1.js
    |   |   |-- education.js
    |   |   |-- farmer.js
    |   |   |-- goods.js
    |   |   |-- home.js
    |   |   |-- hot.js
    |   |   |-- huixiang.js
    |   |   |-- index.js
    |   |   |-- jihua.js
    |   |   |-- login.js
    |   |   |-- newcomer.js
    |   |   |-- psw.js
    |   |   |-- reg.js
    |   |   |-- sirendingzhi.js
    |   |   |-- upload.js
    |   |   |-- users.js
    |   |   |-- zhimakaihua.js
    |   |   `-- zixun.js
    |   |-- server.js
    |   |-- uploads
    |   |   |-- avatar-1562572819413.jpg
    |   |   |-- avatar-1562573056117.jpg
    |   |   |-- avatar-1562573147415.jpg
    |   |   |-- avatar-1562573223825.jpg
    |   |   |-- avatar-1562573251668.jpg
    |   |   |-- avatar-1562573272116.png
    |   |   `-- f74f073d94b6609cd4a17e4090a36a96.jpg
    |   `-- utils
    |       |-- index.js
    |       `-- token.js
    `-- src
        |-- App.css
        |-- App.js
        |-- App.test.js
        |-- assets
        |   |-- css
        |   |-- iconfont
        |   `-- img
        |-- components
        |   |-- Head.js
        |   `-- head.scss
        |-- index.css
        |-- index.js
        |-- js
        |   `-- common.js
        |-- logo.svg
        |-- pages
        |   |-- Author
        |   |-- Cartoon
        |   |-- Education
        |   |-- EloanAdmin
        |   |-- EloanMembers
        |   |-- Enjoy
        |   |-- Farmer
        |   |-- Home
        |   |-- HotTopic
        |   |-- Information
        |   |-- Login
        |   |-- Newcomer
        |   |-- OpenFlower
        |   |-- Personal
        |   |-- Plan
        |   `-- ResetPsw
    `-- serviceWorker.js