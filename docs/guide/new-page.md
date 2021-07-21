# 新增页面

## 新增 route

首先在 `@/router/index.js` 中增加你需要添加的路由。

如：新增一个 excel 页面

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
    },
    {
      path: 'address',
      name: 'ClientAddress',
      component: () => import('@/views/client/address/index'),
      meta: { title: '地址管理' }
    }
  ]
}
export default UserRouter
```

## 新增 view

新增完路由之后要在 `@/views` 文件下创建对应的文件夹，一般一个路由对应一个文件，该模块下的功能组件或者方法就直接放在该目录下的 `utils` 或 `components` 文件夹中，各个功能模块维护自己的 `utils` 或 `components` 组件。如：

```
client/
|- list/
   |- components/
      |- Editor.vue
      |- MenuBar.vue
   |- index.vue
|- tags/
   |- index.vue
|- address/
   |- index.vue
```


## 新增 component

全局的 `@/components` 只应当放一些全局的组件，如富文本、图片管理、封装的分页组件等等能被公用的组件。每个页面或者模块特定的业务组件则写在当前目录下面。这样拆分能大大减轻了维护成本。

如：`@/views/article/components/xxx.vue`。

**请记住拆分组件最大的好处不是公用而是可维护性！**



<br>
<br>

> *参考文档：*
>
> [1] vue-element-admin[《新增页面》](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/new-page.html)
