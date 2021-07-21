# CSS 风格指南

## 缩进

始终使用 soft tab（2个空格）


## 代码书写格式

样式书写一般有两种：一种是紧凑格式 (Compact)
```css
.element { display: block; width: 50px; }
```

一种是展开格式 (Expanded)
```css
.element {
  display: block;
  width: 50px;
}
```

项目中请始终使用**紧凑格式**书写样式，`@keyframes` 除外。

在 Vue 单文件组件中，紧凑的写法能有效减少样式占用的代码行数，代码嵌套结构看起来清晰一些。

在 `Scss` 中，样式应该和选择器写在同一行
```scss
.parent { display: block; width: 50px;
  .child { width: 20px; }
}
```


## 代码大小写

始终使用小写，横线连接 (kebab-case)


## 选择器

- 尽量少用通用选择器 *
- 不使用 ID 选择器
- 不使用标签选择器
- 选择器的嵌套尽量不超过 3 层


## 属性书写顺序

建议遵循以下顺序：

1. 类型：display
2. 布局定位：position / flex / float ...
3. 盒模型：width / height / margin / padding / border ...
4. 文字排版：line-height / font / text-align ...
5. 颜色背景：color / background ...
6. 其他：opacity / cursor / box-shadow / transform / animation ...


## 浏览器私有前缀写法

带有浏览器私有前缀的在前，标准属性在后

示例：
```css
.element {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  border-radius: 10px;
}
```


## 颜色

- 16进制颜色始终使用小写字母
- 16进制颜色尽量用简写

```css
/* 反例 */
.element {
  color: #ABCDEF;
  background-color: #ffffff;
}

/* 正例 */
.element {
  color: #abcdef;
  background-color: #fff;
}
```