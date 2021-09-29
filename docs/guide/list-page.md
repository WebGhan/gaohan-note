# 列表页示例

一般后台管理大体是这样的结构：

![后台页面结构](http://r.photo.store.qq.com/psc?/V14cZO134WCGDx/TmEUgtj9EK6.7V8ajmQrEKWNLsbVLM2SLC8wrbQh71hAnK74NnnnZ70bZRr2xMrC71ickd3vkxKO5V17bRmQr35jHusYxRFTyXEfpLDufDM!/r)

做出来的效果大概是这样的：

![列表页效果](http://r.photo.store.qq.com/psc?/V14cZO134WCGDx/TmEUgtj9EK6.7V8ajmQrEBihhbFUvRfmXgBFeceJXfOyNFbTWYlOmZxh3VKKhJV*wJehm0bCCxGekuz68wVStMR4*ZwgDkQM5ZeYOJdjAz8!/r)

Modal 表单：

![列表页效果](http://r.photo.store.qq.com/psc?/V14cZO134WCGDx/TmEUgtj9EK6.7V8ajmQrEKZbk3R5.W89KxzVgEYWpqRIGTRYVk921R2eix.cY4otXv9n5nKOtIj1sVEien4Htjpv2z3I*4WdFS.Fyc7gcfY!/r)

## 目录结构

```
router/
|- modules/
   |- example.js
|- index.js

api/
|- example/
   |- list.js

views/
|- example/
   |- list/
      |- components/
         |- Editor.vue
         |- MenuBar.vue
         |- index.js
      |- index.vue
```


## router

`@/router/modules/example.js`

```js
import Layout from '@/layout'

const ExampleRouter = {
  name: 'Example',
  path: '/example',
  redirect: '/example/list',
  component: Layout,
  meta: {
    title: '示例',
    icon: 'el-icon-files'
  },
  children: [
    {
      path: 'list',
      name: 'ExampleList',
      component: () => import('@/views/example/list'),
      meta: { title: '列表示例' }
    }
  ]
}

export default ExampleRouter
```

`@/router/index.js`

```js
import ExampleRouter from '@/router/modules/example'

// ...

export const asyncRoutes = [
  ExampleRouter,
  // ...
]

// ...
```


## api

```js
import request from '@/utils/request'

// 获取 列表
export function fetchList(params) {
  return request({
    url: '/example/index',
    method: 'GET',
    params
  })
}

// 获取 项
export function fetchItem(id) {
  return request({
    url: `/example/${id}`,
    method: 'GET'
  })
}

// 创建 项
export function createItem(data) {
  return request({
    url: '/example/store',
    method: 'POST',
    data
  })
}

// 更新 项
export function updateItem(id, data) {
  return request({
    url: `/example/${id}`,
    method: 'PUT',
    data
  })
}

// 删除 项
export function deleteItem(id) {
  return request({
    url: `/example/${id}`,
    method: 'DELETE'
  })
}
```


## index.vue

列表作为页面的主体放在 `/list/index.vue` 中，菜单栏和表单都是主体的延伸，抽离成单独的组件。

代码如下：

```html
<template>
  <div class="g-app-container-flex">
    <!-- 菜单栏 -->
    <MenuBar
      :filter-loading="listLoading"
      @filter="handleFilter"
      @create="openEditor(false)"
    />

    <!-- 列表 -->
    <el-table
      ref="table"
      v-loading="listLoading"
      :data="list"
      size="medium"
      height="auto"
      style="width: 100%;"
    >
      <el-table-column label="ID" prop="id" width="80" />
      <el-table-column label="字段1" prop="field-1" width="200" />
      <el-table-column label="字段2" prop="field-2" width="200" />
      <el-table-column label="字段3" prop="field-3" width="200" />

      <el-table-column label="操作" min-width="160" fixed="right">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="openEditor(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            size="mini"
            :loading="deleteLoading === scope.row.id"
            @click="handleDelete(scope.row.id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 列表分页 -->
    <Pagination
      :total="listTotal"
      :page-size.sync="listQuery.limit"
      :current-page.sync="listQuery.page"
      @change="pageChange"
    />

    <!-- 编辑 -->
    <Editor
      ref="Editor"
      @change="getList"
    />
  </div>
</template>

<script>
import { fetchList, deleteItem } from '@/api/example/list'
import { Editor, MenuBar } from './components'
import { Pagination } from '@/components'

export default {
  name: 'UserList',
  components: {
    Editor,
    MenuBar,
    Pagination
  },
  data() {
    return {
      list: [],
      listLoading: false,
      listTotal: 0,
      listQuery: {
        page: 1,
        limit: 20
      },
      deleteLoading: 0
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 打开编辑
    openEditor(item) {
      this.$refs['Editor'].open(item)
    },
    // 获取列表
    async getList() {
      this.listLoading = true
      try {
        const res = await fetchList(this.listQuery)
        this.list = res.data
        this.listTotal = res.meta.total
      } catch (error) {
        console.log(error)
      } finally {
        this.listLoading = false
      }
    },
    // 修改分页
    pageChange() {
      this.getList()
      this.$refs.table.bodyWrapper.scrollTop = 0
    },
    // 处理筛选
    handleFilter(filterForm) {
      this.listQuery = { ...this.listQuery, ...filterForm }
      this.listQuery.page = 1
      this.getList()
      this.$refs.table.bodyWrapper.scrollTop = 0
    },
    // 处理删除
    async handleDelete(id) {
      if (this.deleteLoading) { return }
      this.deleteLoading = id
      try {
        const confirm = await this.$confirm(
          '确定要删除吗?',
          '提示',
          { type: 'warning' }
        )
        if (confirm !== 'confirm') { return }
        await deleteItem(id)
        this.getList()
        this.$message.success('删除成功')
      } catch (error) {
        console.log(error)
      } finally {
        this.deleteLoading = 0
      }
    }
  }
}
</script>
```

部分老项目的`Pagination`组件可能没更新，需要替换，例如：linian-admin

```html
<Pagination
  v-show="listTotal > 0"
  :total="listTotal"
  :page.sync="listQuery.page"
  :limit.sync="listQuery.limit"
  @pagination="pageChange"
/>
```


## components

### MenuBar.vue

我们将菜单栏抽离到 `/list/components/MenuBar.vue` 中：

```html
<template>
  <div class="g-filter-container">
    <el-form
      inline
      label-suffix=":"
      size="mini"
      @submit.native.prevent
    >
      <el-form-item label="标题">
        <el-input
          v-model="filterForm.title"
          clearable
          @keyup.enter.native="handleFilter"
        />
      </el-form-item>
      <el-form-item label="状态">
        <el-select
          v-model="filterForm.status"
          clearable
          placeholder="请选择"
        >
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          icon="el-icon-search"
          type="primary"
          :loading="filterLoading"
          @click="handleFilter"
        >
          搜索
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          icon="el-icon-plus"
          type="primary"
          @click="handleCreate"
        >
          添加
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { debounce } from 'throttle-debounce'

export default {
  name: 'MenuBar',
  props: {
    filterLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      filterForm: {
        title: '',
        status: ''
      },
      statusOptions: [
        { label: '进行中', value: 'pending' },
        { label: '成功', value: 'success' },
        { label: '已取消', value: 'cancel' }
      ]
    }
  },
  methods: {
    // 搜索
    handleFilter: debounce(500, true, function() {
      this.$emit('filter', this.filterForm)
    }),
    // 创建
    handleCreate() {
      this.$emit('create')
    }
  }
}
</script>
```

#### 其他情况

1. 如果菜单栏只有「刷新」按钮，那么只要将`filterForm`属性设为空对象就行：

```js
filterForm: {}
```

2. 如果首次进入页面就需要带着筛选项，则需要如下处理：

`index.vue`文件
```
- created() {
-   this.getList()
- }
```

`MenuBar.vue`文件
```
+ mounted() {
+   this.handleFilter()
+ }
```


### Editor.vue

我们将 Modal 表单抽离到 `/list/components/Editor.vue` 中：

```html
<template>
  <el-dialog
    :visible.sync="visible"
    :close-on-click-modal="false"
    :title="type === 'create' ? '创建' : '编辑'"
    width="700px"
    @close="resetForm"
  >
    <!-- 表单 -->
    <el-form
      ref="form"
      v-loading="itemLoading"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      size="medium"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="formData.title" />
      </el-form-item>
    </el-form>

    <!-- footer -->
    <div slot="footer">
      <el-button
        size="medium"
        @click="visible = false"
      >
        取 消
      </el-button>
      <template v-if="type === 'create'">
        <el-button
          size="medium"
          type="primary"
          :loading="submitLoading"
          @click="submitForm"
        >
          创 建
        </el-button>
      </template>
      <template v-if="type === 'update'">
        <el-button
          size="medium"
          type="primary"
          :loading="submitLoading"
          @click="submitForm"
        >
          保 存
        </el-button>
      </template>
    </div>
  </el-dialog>
</template>

<script>
import { fetchItem, createItem, updateItem } from '@/api/example/list'

export default {
  name: 'Editor',
  data() {
    return {
      visible: false,
      type: 'create', // create 创建， update 编辑
      formData: this.defaultForm(),
      formRules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'change' }
        ]
      },
      submitLoading: false,
      itemData: null,
      itemLoading: false
    }
  },
  methods: {
    // 默认表单
    defaultForm() {
      return {
        title: ''
      }
    },
    // 重置表单
    resetForm() {
      this.formData = this.defaultForm()
      this.$nextTick(() => {
        this.$refs['form'].clearValidate()
      })
    },
    // 显示弹窗
    async open(item) {
      this.visible = true
      if (item) {
        this.type = 'update'
        await this.getItem(item.id)
        const formData = {}
        for (const key in this.formData) {
          if (this.itemData[key] !== undefined) {
            formData[key] = this.itemData[key]
          }
        }
        this.formData = { ...this.formData, ...formData }
      } else {
        this.type = 'create'
      }
    },
    // 获取单个详情
    async getItem(id) {
      this.itemLoading = true
      try {
        const res = await fetchItem(id)
        this.itemData = res.data
      } catch (error) {
        console.log(error)
      } finally {
        this.itemLoading = false
      }
    },
    // 提交表单
    submitForm() {
      if (this.submitLoading) { return }
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.type === 'create') {
            this.handleCreate()
          } else {
            this.handleUpdate()
          }
        }
      })
    },
    // 创建
    async handleCreate() {
      this.submitLoading = true
      try {
        await createItem(this.formData)
        this.visible = false
        this.$emit('change')
        this.$message.success('创建成功')
      } catch (error) {
        console.log(error)
      } finally {
        this.submitLoading = false
      }
    },
    // 更新
    async handleUpdate() {
      this.submitLoading = true
      try {
        await updateItem(this.itemData.id, this.formData)
        this.visible = false
        this.$emit('change')
        this.$message.success('保存成功')
      } catch (error) {
        console.log(error)
      } finally {
        this.submitLoading = false
      }
    }
  }
}
</script>
```


### index.js

用 `/list/components/index.js` 将组件统一导出，方便之后导入。

```js
export { default as MenuBar } from './MenuBar'
export { default as Editor } from './Editor'
```


## 其他

### Drawer 列表组件

有时候可能还需要添加一个列表作为详情，我们把这个列表放在 Drawer 组件中，例如：

![Drawer列表组件](http://r.photo.store.qq.com/psc?/V14cZO134WCGDx/TmEUgtj9EK6.7V8ajmQrEMc3WDk9jeKnNGk3mSilelIX22Hr6AkBGrMo4Q4luopEvyVCrSrrMwTxOkXYB9HT9bNH6R3lNsJVkQryTqxipz0!/r)

代码示例：

```html
<template>
  <el-drawer
    :title="title"
    :visible.sync="visible"
    size="800px"
  >
    <div class="g-drawer-container-flex">
      <!-- 菜单栏 -->
      <div class="g-filter-container">
        <el-form inline label-suffix=":" size="mini" @submit.native.prevent>
          <el-form-item label="名称">
            <el-input v-model="listQuery.title" placeholder="请输入名称" clearable @keyup.enter.native="handleFilter" />
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search" type="primary" :loading="listLoading" @click="handleFilter">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 列表 -->
      <el-table
        ref="table"
        v-loading="listLoading"
        :data="list"
        size="mini"
        height="auto"
        style="width: 100%;"
        border
      >
        <el-table-column label="ID" prop="id" width="80" />
        <el-table-column label="字段1" prop="field-1" width="200" />
        <el-table-column label="字段2" prop="field-2" width="200" />
        <el-table-column label="字段3" prop="field-3" min-width="200" />
      </el-table>

      <!-- 列表分页 -->
      <el-pagination
        v-show="listTotal > 0"
        style="flex-shrink: 0; margin-top: 15px;"
        background
        layout="prev, pager, next"
        :total="listTotal"
        :current-page.sync="listQuery.page"
        :page-size="listQuery.limit"
        @current-change="pageChange"
      />
    </div>
  </el-drawer>
</template>

<script>
import { fetchList } from '@/api/example/list'

export default {
  name: 'Detail',
  data() {
    return {
      visible: false,
      title: '我是标题',
      itemId: '',
      list: [],
      listLoading: false,
      listTotal: 0,
      listQuery: {
        title: '',
        page: 1,
        limit: 20
      }
    }
  },
  methods: {
    // 显示弹窗
    open(item) {
      this.visible = true
      this.listQuery.page = 1
      this.itemId = item.id
      this.getList()
    },
    // 获取列表
    async getList() {
      this.listLoading = true
      try {
        const res = await fetchList(this.itemId, this.listQuery)
        this.list = res.data
        this.listTotal = res.meta.total
      } catch (error) {
        console.log(error)
      } finally {
        this.listLoading = false
      }
    },
    // 修改分页
    pageChange() {
      this.getList()
      this.$refs.table.bodyWrapper.scrollTop = 0
    },
    // 处理筛选
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
      this.$refs.table.bodyWrapper.scrollTop = 0
    }
  }
}
</script>
```