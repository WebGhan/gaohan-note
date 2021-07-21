# 风格指南

本项目的风格指南主要是参照 Vue 官方的[《风格指南》](https://cn.vuejs.org/v2/style-guide/)。在真正开始使用该项目之前建议先阅读一遍指南，这能帮助你写出更规范和统一的代码。其中大部分规则也都配置在了 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)之中，当没有遵循规则的时候会报错，详细内容见 [eslint](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/eslint.html)章节。

当然也有一些特殊的规范，是不能被 eslint 校验的。需要人为注意并遵循，最主要的就是文件的命名规则。


::: tip
没有特别说明的，均遵循横线连接 (kebab-case)的方式命名。
:::


## Component

代表 `Component` 的文件都是以大写开头 (PascalCase)，但除了 `index.vue` 。

例子：

- `@/components/BackToTop/index.vue`
- `@/components/Charts/Line.vue`
- `@/views/example/components/Button.vue`


### 嵌套子组件

嵌套子组件的写法，请参考 [紧密耦合的组件名](https://cn.vuejs.org/v2/style-guide/#%E7%B4%A7%E5%AF%86%E8%80%A6%E5%90%88%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)

好的例子：
```
components/
|- TodoList/
   |- Item.vue
   |- Button.vue
   |- index.vue
```

组件只应当嵌套一层，以保证可维护性，反例：
```
components/
|- TodoList/
   |- Item/
      |- index.vue
      |- Button.vue
   |- index.vue
```

### 统一导出组件

当组件较多时，用 `index.js` 统一导出，可以有效减少 import 的代码行数

例子：
```
components/
|- Item.vue
|- Button.vue
|- TodoList.vue
|- index.js
```

`index.js` 文件内容：
```js
export { default as Item } from './Item'
export { default as Button } from './Button'
export { default as TodoList } from './TodoList'
```

导入方法：
```js
import { Item, Button, TodoList } from './components'
// 或
import * as AllComponents from './components'
```


## Views

在 `views` 文件下，代表路由的 `.vue` 文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例子：

- `@/views/svg-icons/index.vue`
- `@/views/svg-icons/require-icons.js`

使用横线连接 (kebab-case)来命名views主要是出于以下几个考虑。

- 横线连接 (kebab-case) 也是官方推荐的命名规范之一。
- `views` 下的 `.vue` 文件代表的是一个路由，所以它需要和 `component` 进行区分。
- 页面的 `url` 也都是横线连接的，比如 `https://www.xxx.admin/export-excel` ，所以路由对应的 `view` 应该要保持统一。
- 没有大小写敏感问题。


## JS 文件

所有的 `.js` 文件都遵循横线连接 (kebab-case)。

例子：

- `@/utils/open-window.js`
- `@/views/svg-icons/require-icons.js`
- `@/components/MarkdownEditor/default-options.js`


<br>
<br>

> *参考文档：*
>
> [1] vue-element-admin[《风格指南》](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/style-guide.html)