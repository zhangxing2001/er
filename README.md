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

<!--
  侧边导航栏业务
1.动态路由的场景
    根据陆游的配置，动态生成侧边导航含，路由发生变化，对应的侧边菜单栏也会发生变化
2.静态菜单的生成
    菜单:
    el-menu 整个菜单
    el-ub-menu 包含子菜单一级菜单
    el-menu-item 子菜单 或者 一级菜单 （跳转页面）
    如果他 el-menu-item做二级菜单需要包含在 el-ub-menu 里面
2.实现动态路由和菜单的思路
    1.创建路由和对应的页面组件
    2.在sidebarMenu.vue 中加载创建的路由
        router.options.routes 获取完整的路由
          优点：
             不会重复出现二级路由的情况
          缺点：
              只能获取当前的路由，对于新增或者减少的路由 无法获取在后期配合用户权限的时候，不能根据用户权限更新路由表---无法更新侧边菜单
        router.getRoutes()
          优点：能够获取完整的路由，对于路由的变化（象新增或者删除都能拿到），也能拿到变化后的路由表，配合用户的权限只能用这种方式的路由
          缺点：
            二级路由重复，并且和以及路由放在同一个层级
        问题：
          1.处理重复的路由
          2.有些路由不应出现在菜单中（/login,401,404）
            以什么原则决定到底是否在菜单中 核心
               1.meta 路由原信息 如果存在 (meta && meta.icon && meta.title) 就该出现
                  如果存在chilfren  以他来显示  el-ub-menu 显示一级菜单 然后以el-menu-item 显示children的二级菜单
                2.不存在children 以他来显示el-menu-item一级菜单
               如果不满足这个条件 (meta && meta.icon && meta.title) 就不应该出现

    3.根据获取的路由对象，遍历输出对应的菜单

     -->
