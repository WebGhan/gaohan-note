# 范例-新增页面

项目比较复杂时，我们需要将页面按不同模块进行分组，便于维护。


## 新增 route

首先在 `src/router` 中增加需要添加的路由，我们将不同的模块拆分到 `src/router/modules` 中去。

例如：新增一个 Client 模块，里面包含「客户列表页」和「客户标签页」

```
router/
|- modules/
   |- client.js
|- index.js
```

`src/router/modules/client.js`

```js
import Layout from '@/layout'

const ClientRouter = {
  name: 'Client',
  path: '/client',
  redirect: '/client/list',
  component: Layout,
  meta: {
    title: '客户',
    icon: 'el-icon-s-custom',
  },
  children: [
    {
      path: 'list',
      name: 'ClientList',
      component: () => import('@/views/client/list/index'),
      meta: { title: '客户列表' }
    },
    {
      path: 'tags',
      name: 'ClientTags',
      component: () => import('@/views/client/tags/index'),
      meta: { title: '客户标签' }
    }
  ]
}
export default ClientRouter
```


## 新增 view

新增完路由之后要在 `src/views` 目录下创建代表路由的组件文件 `index.vue`，该文件放在页面命名的目录下，与之相关的局部组件就放在该目录下的 `components` 目录中。

例如：

```
client/
|- list/
   |- components/
      |- Editor.vue
      |- MenuBar.vue
   |- index.vue
|- tags/
   |- index.vue
```


## 新增 component

`src/components` 目录下只应当放一些全局的组件，如富文本、图片管理、封装的分页组件等能被公用的组件。模块特定的业务组件则写在当前目录下面。这样拆分能大大减轻了维护成本。

如：`src/views/client/list/components/MenuBar.vue`。

::: tip
请记住拆分组件最大的好处不是公用而是可维护性！
:::


## 新增 api

同样的，我们按照页面的模块，在 `src/api` 目录下创建对应的 api 服务：

```
api/
|- client/
   |- list.js
   |- tags.js
```

<br>
<br>

## 多级路由嵌套

多级路由嵌套别忘了添加 `<router-view>`

例如三级路由嵌套的情况下，需要在二级目录的根文件下添加一个 `<router-view>` ：

```
nested/
|- menu1/
  |- menu1-1/
    |- index.vue
  |- menu1-2/
    |- index.vue
  |- menu1-3/
    |- index.vue
  |- index.vue
```

`nested/menu1/index.vue` 中添加 `<router-view>` ：
```html
<template>
  <view-router />
</template>
```
