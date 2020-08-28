---
title: "Object类型"
date: "2020-01-01"
permalink: "2020-01-01-引用类型-Object类型"
---

[[toc]]
## Object介绍
**数据类型**
* 【基本数据类型】：Number、String、Boolean、null、undefined
* 【引用数据类型】：Object、Function、Array、Date、Math、RegExp
* 【新增数据类型】：symbol

Object引用数据类型：实际上就是一个内置的构造函数Object。

## 创建单个对象的方法有两种
*   其一：使用new操作符后面跟一个Object构造函数。`let obj = new Object()`
*   其二：对象字面量表示法。（简化了创建“包含大量对象属性”的过程）`let obj = {name:"王伟"}`

**1、new操作符创建对象**
```javascript
var person = new Object();
person.name = "wangwei";
person.age = 26;
console.log(person);//{ name: 'wangwei', age: 26 }
```
**2、对象字面量表示法**
```javascript
var person1 = {
    name:'malin',
    age:'age'
};
console.log(person1);//{ name: 'malin', age: 'age' }
```
属性名也可以使用字符串，有空格的属性名必须使用字符串

```javascript
var person2 = {
    'name':'malin',
    'age':26,
    5:true//数字会自动转化为字符串
};
console.log(person2);// { '5': true, name: 'malin', age: 26 }
```
只留花括号：可以定义只包含默认属性和方法的对象。

```javascript
var person3 = {};
person3.name="wangwei3";
person3.age = 26;
console.log(person3);//{ name: 'wangwei3', age: 26 }
```
注意：通过字面量定义对象的时候，实际上不会调用Object构造函数

## 对象属性的调用
用字面量方法创建一个对象
```javascript
var person = {
    name:'malin',
    age:26,
    5:true,//数字会自动转化为字符串
    'first name':'wangwei'
};
console.log(person);// { '5': true, name: 'malin', age: 26 }
```
1、可以通过" ." 或者 "[]" 调用对象中的属性
```javascript
console.log(person.name);//"malin"
console.log(person["name"]);//"malin"
```
2、数字 或者 有空格的字符串 只能使用方括号调用

```javascript
console.log(person["5"]);//true
console.log(person['first name']);//wangwei
```
【除非必须使用变量来访问属性，否则建议使用点表示法。】

## Object的属性
### Object.prototype

