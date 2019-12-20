## 极简的react框架，拿来即用
一直在写业务代码，很久没有从头至尾搭建一个新项目，用此项目温习之前学习的webpack、react、ts的东西，会不定时更新优化<br />

#### 关于 babel 的配置说明
babel可以将class，箭头函数等浏览器不支持的语法进行转换，如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise、Object.assign() 等，是不会转换的。这时候就需要 polyfill 了<br />
polyfill在babel7中的使用：
useBuiltIns提供了false, entry, usage三种方式:
- false: polyfill做操作，如果引入@babel/polyfill，会无视配置的浏览器兼容，引入所有的 polyfill。
- entry: 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill。需要在入口文件手动添加 import '@babel/polyfill'，会自动根据 browserslist 替换成浏览器不兼容的所有 polyfill
- usage: 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加。一般推荐使用usage
```
["@babel/env",
      {
        "useBuiltIns": "usage",
        "corejs": "3.0.0"
      }
]
```
下面是个依赖说明:
```angular2
// webpack配置文件支持import等es6语法
@babel/register

// babel命令行
@babel/cli

// babel的核心,转码操作都是基于@babel/core
@babel/core

// 处理class中的语法
@babel/plugin-proposal-class-properties


// 处理修饰器
@babel/plugin-proposal-decorators

// 对rest、spread语法进行处理
@babel/plugin-proposal-object-rest-spread

// 用以解析识别import()动态导入语法---并非转换，而是解析识别(如在路由中导入组件)
@babel/plugin-syntax-dynamic-import

// 按需引入es6的新的API
@babel/polyfill

/* 选择链，支持 const xxx = obj?.property?.property?.property?
* if(obj && obj.length>0 && obj[0]  && obj[0].property){
*        xxx = timeZoneInfo[0].property
* }
* 可简写为 xxx = obj?.[0]?.property
*/
@babel/plugin-proposal-optional-chaining

```



以上:blush:

#### 安装依赖
```
npm run install
```

#### 打包
```$xslt
npm run build
```
#### 启动
```$xslt
npm run start
```