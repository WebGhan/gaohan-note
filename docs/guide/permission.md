# 权限验证

## 配置权限

在后台「权限管理」页面，进行权限配置，注意权限的「标识」将用于前端权限验证。

![配置权限](http://r.photo.store.qq.com/psc?/V14cZO134WCGDx/TmEUgtj9EK6.7V8ajmQrEGOV5DN1D0LeeB7.olnYpGCSvw7a.3yB0udkg6XQd40uAbr5G0RnnyrjBfbag1ulNHP*pEZHUMgju7mRCMnBi*c!/r)


## 路由权限

在 route 的 meta 属性里配置 roles 即可：

```js
import Layout from '@/layout'

const SystemRouter = {
  name: 'System',
  path: '/system',
  redirect: '/system/permission',
  component: Layout,
  meta: {
    title: '系统设置',
    icon: 'el-icon-setting',
    roles: ['system'] // 此处添加权限「system」
  },
  children: [
    {
      path: 'permission',
      name: 'SystemPermission',
      component: () => import('@/views/system/permission/index'),
      meta: { title: '权限管理', roles: ['system-permission'] } // 此处添加权限「system-permission」
    }
  ]
}

export default SystemRouter
```


## 菜单权限

使用全局权限判断函数：

`checkPermission()` 方法接受一个字符串数组作为参数，返回一个布尔值。

```vue
<template>
  <el-tab-pane v-if="checkPermission(['admin'])" label="Admin">Admin can see this</el-tab-pane>
  <el-tab-pane v-if="checkPermission(['editor'])" label="Editor">Editor can see this</el-tab-pane>
  <el-tab-pane v-if="checkPermission(['admin','editor'])" label="Admin-OR-Editor">Both admin or editor can see this</el-tab-pane>
</template>

<script>
import checkPermission from '@/utils/permission'

export default{
  methods: {
    // 权限判断函数
    checkPermission
  }
}
</script>
```