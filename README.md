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

<!-- 退出业务 -->

        token 的作用
           1) token 是由后台首次登陆的时候=生成，通过resp 响应给前段 意思是说一个token 同时在前后端都有保存
           2) token 表示用户的身份，是一个用户的令牌，对于服务器而言，只认token不认人，意思就是说别人获取你的token 以你的身份就能登陆服务器，获取你的敏感数据所以处于完全角度，需要对token进行一些安全策略的处理
               常见的处理方式：
                  动态 token
                  时效 token
                  刷新 token
                  .....
            3) 常见的退出方式：
                  主动退出：用户手动点击退出按钮，执行退出登录
                  被动退出：
                    token 失效 （超出了token的有效期，失去服务器对用户体验的条件）
                      前段的token 失效
                      后端生成的token 失效
                    单点登录 （后端处理）（你已经登录的情况下 你或者别人在别的设备上登录 然后你当前的登录就会顶下来）
            总结：
            1.前段只能处理主动退出 和 前段token失效
            2.如果后端token失效 和 单点登录
              以特定的状态码通知前段
                code 401 后台token 失效
                code 405 单点登录
                也是要你执行前段的退出操作

            4) 退出登录操作逻辑
                 1.清理掉用户的缓存数据 token userinfo
                 2.清理用户的权限
                 3.返回登录页面
            5) 主动退出 (前段)
            6) token 失效 (前段)
                1.用户登录得到token 得时候记录时间
                2.指定token 生效时间2小时
                3.在调用接口的时候 需要带token 需要判断这个token时候再有有效之内
