# script

> wiki 面试题

```js
async function foo () {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        const num = Math.floor(Math.random() * 100)
        if (num > 50) {
          resolve(num)
        } else {
          reject(num)
        }
      }, 2000)
    })
  } catch(error) {
    console.log(error)
  }
}

```

## 列表

- 图片

1. 有序列表1
2. 有序列表2
3. 有序列表3
4. 有序列表4

![img](https://vuejs.org/images/logo.png)

试试脚本

## 试试锚点

`javascript` 书

*斜体*

---

**粗体**

### 三级标题


## 表格

| 表头2 | 表头2 |
| --- | --- |
| 内容1 | 内容2 |


::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
