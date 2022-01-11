# JavaScript

## 编码风格


### 缩进

始终使用 soft tab（2个空格）


### 大括号风格

JavaScript 中，主要有三种风格，如下：

- One True Brace Style
```js
if (foo) {
  bar()
} else {
  baz()
}
```
- Stroustrup
```js
if (foo) {
  bar()
}
else {
  baz()
}
```
- Allman
```js
if (foo)
{
  bar()
}
else
{
  baz()
}
```

团队约定使用 `One True Brace Style` 风格，请始终保持这种书写风格。


### 变量命名

当命名变量时，主流分为驼峰式命名（camelCase）和下划线命名（under_score_case）两大阵营。

团队约定使用**驼峰式**命名。


### 常量命名

团队约定使用**下划线命名（UNDER_SCORE_CASE）** 命名。


### 注意事项

在诸如 if 和 while 这样结构化的语句里，请始终使用代码块，这样会减少出错的概率。

```js
// 反例
if (a)
  b()

if (a) return


// 正例
if (a) {
  b()
}

if (a) { return }
```


## 注释

在项目中，请不要编写无意义的注释，仅保留必要的注释

>可参考 [usejsdoc](https://jsdoc.app/) 和 [JSDoc Guide](http://yuri4ever.github.io/jsdoc/)


### 函数或方法的注释

```js
/**
 * 函数说明
 * 
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
```

可选参数
```js
/**
 * @param {number} arg1 必传参数
 * @param {string} [arg2] 可选参数
 */
```