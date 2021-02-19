## 版本控制
    1.生远程仓库(New repository) =>填写Repository Name,Description(optional)
    2.生成本地仓库 =>
        1)检查一下gitigore 有没有/.idea 和 /node_module
        2)项目下cmd/项目下Go Bash Here
            --本地操作
            git init生成工作区
            git add .添加到暂存区
            git commit -m "init app" 提交到版本区 (默认是master分支)  提交更新

            --关联远程地址
            git remote add origin https://github.com/ericl0286/manage-system.git
            git push origin master =>push origin 到远程master分支
            git checkout -b dev 我们当前在master 分支上，但是我们要在dev(可以叫别的名字)分支上干活
                这时候我们就在dev分支上了，以当前master分支为内容船舰的新分支
                这时候我们是再本地的dev分支上，我们还需要推送本地的dev到远程上
            git push origin dev
                    补充:(git checkout -b dev origin/dev) =>> 根据远程仓库的dev生成本地仓库的dev
                            git branch 查看当前本地分支
                            git pull origin dev 以后远程版本更新了,打工去需要拉去东西从dev上的操作，从master就是git pull origin  master

## 函数组件和类组建的取舍
    如果一个组件不需要用到state，那我们就可以用函数组件来定义

## src下的子目录
    api =>ajax相关
    assets =>公共资源 (公共样式，公共css)
    components =>非路由组件
    config =>配置
    pages =>路由组件
    utils =>工具模块(数据储存)

## 问题:UI库按需引入打包=>Use in create-react-app =>import on demand
    下面之以前的写法，现在貌似不需要在引入了，再craco.config.js中的修改babel
            babel:{
                "plugins": [["import", {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                }]]
            },
--------------------------------------------------------------------------------

    1)按需引入/打包 npm i react-app-rewired customize-cra babel-plugin-import
    2)引入antd的样式文件 import 'antd/dist/antd.css'
        --这样的引入的css太大，需要按需引入
            1.在项目*根*目录下引入craco.config.js 
            2.使用babel-plugin-import技术 =>npm install babel-plugin-import --save-dev
                const { override, fixBabelImports } = require('customize-cra');
                module.exports = override(
                    <!-- 根据antd实现按需打包，根据import来打包(使用babel-plugin-import来实现) -->
                    fixBabelImports('import', {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: 'css',
                    }),
                    );
            3.修改package.json中script
                "scripts": {
                    "start": "react-app-rewired start",
                    "build": "react-app-rewired build",
                    "test": "react-app-rewired test",
                }


## 问题:自定义主题 (修改页面的风格) => Use in create-react-app =>custmoize Theme 
    1.Follow Docs
        const CracoLessPlugin = require('craco-less');
            module.exports = {
            plugins: [
                {
                plugin: CracoLessPlugin,
                options: {
                    lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                    },
                },
                },
            ],
            };
-------------------------------------------------------------------------------------------------

##  引入路由组件 npm i react-router-dom
    在pages(是路由的所以在pages下)下面创建login和admin两个文件夹
    1.映射路由=> import {BrowserRouter,Route} from 'react-router-dom'
    2.<Route path="路由地址" component="映射关系"> 
            <BrowserRouter>
            <Route path="/login" component={Login}></Route>
            </BrowserRouter>
    3.引入Switch只匹配一个路由组件，避免多次渲染，提高效率
            <BrowserRouter>
            <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Admin}></Route>
            </Switch>
            </BrowserRouter


## Admin.jsx
1.获取admin页面需要的东西，创建各种文件夹
    所有静态文件都在public下面=>reset.css 引入注意相对路径页面渲染的问题 <link rel="stylesheet" href="%PUBLIC_URL%/css/reset.css">
    或者去掉前面的.
2.看不见图片的问题检查html,body,#root标签的高度
问题:3.react里面不能写相对路径，必须先引入 import logo from '../img/logo.jpg'

## 问题:css 
    {
    display:flex 水平排开使用
    align-items: center 垂直居中 
    }
    margin: 200px auto; 水平居中普通使用
    text-align: center; 字体居中
    font-weight：bold; 字体加粗

## antd-form

input 也可以写成  prefix={<icon>}的形式 看docs


## When top validate Form
    1.when you are inputing(front-end)
    2.After you click submit(back-end)
        问题:Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Wave which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node   => 删除<React.StrictMode>  index.js under root file
    3.validator 自定义 参考docs


## 前后台交互
    1.postman工具区测试后台的api接口是否准确/FEHELPER -postman
        API 接口信息：url地址，请求方式，参数，响应数据
        FeHelper:
        查看示例

    2.API接口正确进入下一步，axios进一步封装发送ajax请求
        alt+ < 回退
    3.写一个接口型函数

    4.跨域问题
        1.协议名不一样http  https
        2.主机名不一样www.baidu.com   www.sina.com
        3.端口号不同  

        解决:jsonp只能解决GET请求
            cros解决
            代理解决

    5.async await
        如果不在ajax里面.then 可以在/login里面使用async await 结合try catch来解决 p.23 atguigu
            以同步编码流程来解决异步问题