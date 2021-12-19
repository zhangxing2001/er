# dierci

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

// 入口文件 maib.js (导入模块 【js css 文件】) --->webpack 出口 js/app.js 文件
// 【js css 文件】 ---> 通过 loaber 转换成 --> 对应的 js 模块 --> 然后 webpack 打包

// 不需要配置 直接使用， 因为项目的环境已经配置了 常见的 loader

// 查看 webpack 的默认配置
