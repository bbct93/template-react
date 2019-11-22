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