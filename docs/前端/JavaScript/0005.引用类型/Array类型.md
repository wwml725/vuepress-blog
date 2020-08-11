[[toc]]
## Array的基本认识
### 创建数组的两种方法
**0001.使用Array构造函数**

不传参数
```javascript
var arr = new Array();
console.log(arr)
```
传入一个参数
```javascript
//1、如果这个参数是数值，这个数值就是数组的长度
var arr = new Array(20);
console.log(arr)
console.log(arr.length)//20
//2、如果传入的参数是一个字符串,这个字符串就是数组中的一项
var arr = new Array('wangwei');
console.log(arr);//["wangwei"]
```

如果传入两个或者两个以上的值，就是创建了一个数组,传入的参数就是数组应该包含的项。
```javascript
var arr2 = new Array(2,3)
console.log(arr2);//[2,3]
```
另外，使用Array创建数组的时候也可以省略new操作符
```javascript
//创建一个包含三项的数组
var arr = Array(3);
//创建一个包含一项，字符串"wangwei"的数组
var names = Array("wangwei")
```

**0002.字面量表示法**
```javascript
var colors = ["red","blue","green"];
var names = [];
var values = [1,2,];
var options = [,,,,,]
```
### 数组的检测方式
```javascript
var arr  = [1,2,3,4,5];
console.log(arr instanceof Array);//true

console.log(Array.isArray(arr));//true

console.log(Object.prototype.toString.call(arr));//[object Array]
console.log(Object.prototype.toString.call(arr)==="[object Array]");//true

console.log(arr.constructor);//[Function: Array]

console.log(arr.constructor===Array);//[Function: Array]
```


## Array的属性和方法

## 转换方法
### toLocaleString()
### toString()
### valueOf()
### join()

## 栈方法
### push()
### pop()




## 队列方法
### shift()
### unshift()

## 重排序方法
### sort()
### reserve()


## 操作方法
### concat()
### slice()
### splice()

## 位置方法
### indexOF()
### lastIndexOF()

## 迭代方法
### every()
### filter()
### forEach()
### map()
### some()

## 归并方法
### reduce()
### reduceRight()





### 数组的属性

### 数组的方法

## 数组排序

## 数组去重
