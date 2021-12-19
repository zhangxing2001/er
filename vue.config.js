// node加载common.js
// 导出一个配置对象 作为webpack的配置
const path = require('path') // 导入node 一个默认模块 解析目录相关
function getPath(src) {
  // __dirname // 当前文件的绝对路径
  return path.join(__dirname, src)
}

module.exports = {
  // 配置svg-sprite-loader 解析指定目录
  chainWebpack(config) {
    // config 就是webpack 默认的配置对象
    // 1.获取webpack 对svg解析的loader
    config.module.rule('svg').exclude.add(getPath('src/icon_svg/svg')).end() // exclude 除了呢个目录不处理
    // 2.禁用loader 对svg 的解析

    // svgloader.end()
    // 3.配置新的loader 对svg解析
    // 新增一个名字叫icons的rule的规则
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(getPath('src/icon_svg/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // 处理什么类型的文件
    // svgSpriteLoader.test(/\.(svg)(\?.*)?$/) // 正则可以参考以前的
    // loader 解析的目录
    // svgSpriteLoader.include.add(getPath('src/icon_svg/svg'))
    // svgSpriteLoader.end() // 返回上一层 到 include这一层
    // 使用什么loader 解析匹配的文件
  },
  // 配置代理服务器
  devServer: {
    proxy: {
      // 只代理api 开头的网路请求
      '/api': {
        // 代理目的地址
        target: 'https://api.imooc-admin.lgdsunday.club',
        // 是否开启代理
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
}
