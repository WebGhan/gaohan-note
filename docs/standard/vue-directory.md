# Vue 目录规范

## 命名规范

1. 默认使用横线连接(kebab-case)的方式来命名文件夹和文件。
2. 代表路由的 .vue 文件使用横线连接(kebab-case)，代表路由的文件夹也是使用同样的规则。
3. 所有的 Component 文件都是以大写开头(PascalCase)，index.vue 除外。


## 目录规范

1. views、api、router、vuex 下的目录或分组看起来要有一点统一性，便于维护和查询。

2. 前端路由里的路径和 views 下的目录也要看起来基本统一。


## 组件目录

1. 全局通用组件放在 /src/components 目录下
2. 局部组件放在各自的 ./components 目录下
3. components 目录下的组件较多时，应该用 index.js 统一导出组件


### 和父组件紧密耦合的子组件应该放在其父组件命名的目录中

> 参考编码风格中的『紧密耦合的组件名』

1. 不要过多的嵌套子目录
2. 该目录下必须要有 index.vue

Sidebar 组件示例：
```
components/
|- Sidebar/
   |- index.vue
   |- Button.vue
   |- Link.vue
   |- Title.vue
|- Breadcrumb.vue
|- Navbar.vue
|- index.js
```


### 为什么要使用 index.js 导出组件？

index.js 中导出组件方式如下：
```js
export { default as Navbar } from './Navbar'
export { default as Sidebar } from './Sidebar'
export { default as Breadcrumb } from './Breadcrumb'
```

当组件较多时，用 index.js 统一导出，可以有效减少 import 的代码行数：
```js
// 不使用 index.js 导出的导入方式
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
import TagsView from './components/TagsView'


// 使用 index.js 导出的导入方式
import { Navbar, Sidebar, AppMain, TagsView } from './components'
// 或
import * as AllComponents from './components'
```


## api 目录

始终将请求函数放入 api 目录中统一管理，请使用 export 导出，而不是 export default

示例：
```
api/
|- user/
   |- login.js
   |- list.js
|- goods/
   |- list.js
```

```js
// api/goods/list.js
import request from '@/utils/request'

const fetchList = (params) => {
  return request({
    url: 'goods/list',
    method: 'GET',
    params
  })
}

const fetchItem = (id) => {
  return request({
    url: `goods/${id}`,
    method: 'GET'
  })
}

export {
  fetchList,
  fetchItem
}
```


## 案例

```
src/
|- api/
   |- user/
      |- login.js
      |- list.js
   |- goods/
      |- item.js
      |- list.js  
|- components/
   |- Sidebar/
      |- index.vue
      |- Button.vue
      |- Link.vue
      |- Title.vue
   |- Breadcrumb.vue
   |- Navbar.vue
   |- index.js
|- views/
   |- goods/
      |- list/
         |- index.vue
      |- show/
         |- index.vue
   |- user/
      |- list
         |- index.vue
         |- components/
            |- Filter.vue
            |- Item.vue
            |- Pagination.vue
```