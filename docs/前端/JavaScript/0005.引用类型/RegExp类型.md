

## 正则表达式
一般是用来处理字符串的。
- 判断字符串是否符合正则规定。
- 将符合正则的字符串从源字符串中捕获出来。
- **验证**：reg.test("")
- **捕获**：reg.exec("")

## 创建方式
构造函数方式
```javascript
var reg = new RegExp("asdf")
```
对象直接量方式
```javascript
var reg = /asdf/
```

## 修饰符
```
var expression = /pattern/flags;
```
- pattern:代表任意简单或者复杂的正则表达式。
- flags：标明正则表达式的行为。
    - g: 全局模式
    - i: 表示不区分大小写
    - m: 表示多行
    
匹配字符串中的所有"ab"
```javascript
var reg1 = /ab/g;
```    
匹配第一个ab，不区分大小写
```javascript
var reg2 = /aB/i;
```
匹配所有的"ab"组合,不区分大小写
```javascript
var reg3 = /abAbAB/gi;
```

## 验证和捕获
**test()**：用来验证字符串是否符合正则表达式。

**exec()**：用来捕获字符串中符合正则表达式规则的字符串。

```javascript
//1、创建一个正则
var reg1 = /ab/;
var str1 = "a";
console.log(reg1.test(str1));//false

var reg1 = /[abcdefg]/;//只要字符串中有一个[]中的字符，就符合正则
var str1 = "a";
console.log(reg1.test(str1));//true


//exec()
var reg2 = /abcd/;
var str2 = "abcdefg";
//捕获正则中的内容
var result = reg2.exec(str2);
console.log(result);//["abcd", index: 0, input: "abcdefg", groups: undefined]
//注意：数组中的'abcd'是数组的值，其他的都是数组的属性
console.log(result + "1");//可见捕获的内容可以拿来直接用的
alert(result)//'abcd'
console.log(result[0]);//"abcd"
```

## 元字符
定位符

| 字符        | 描述        | 
| :------------- |:-------------| 
| ^     | 匹配字符串的开始位置 | 
| $      | 匹配字符串的结束位置      | 
|\b|  匹配一个单词边界    | 
|\B|  匹配一个非单词边界    | 


限定符

| 字符        | 描述        | 
| :------------- |:-------------| 
|*| 匹配前面的子表达式零次或者多次      |    
|+| 匹配前面的子表达式1次或者多次      |   
|?| 匹配前面的子表达式0次或者一次      |   
|{n}| 出现n个      |   
|{n,}| 至少n个      |   
|{n,m}| 出现n到m个      |

:::details 贪婪匹配 & 非贪婪匹配
```javascript
//4、贪婪匹配和非贪婪匹配
//贪婪匹配 ：尽可能多的匹配.
//非贪婪匹配 : 尽可能少的匹配，在表示数字的符号后面加一个？
// --》{n,}?  {n,m}?  ??  +?  *?
 //贪婪匹配
var reg1 = /\w{2,}/;
var str11 = 'wangwei123';
console.log(reg1.test(str11));//true
console.log(reg1.exec(str11));
//["wangwei123", index: 0, input: "wangwei123", groups: undefined]


//非贪婪匹配 ？
var reg2 = /\w{2,}?/;
var str21 = 'wangwei123';
console.log(reg2.test(str21));//true
console.log(reg2.exec(str21));
//["wa", index: 0, input: "wangwei123", groups: undefin
```
:::

:::details  点击查看代码
```javascript
//*
var reg1 = /o*/;//匹配0或者多个o
var str11 = "good";
var str12 = "gd";
console.log(reg1.test(str11));//true
console.log(reg1.test(str12));//true
//+
var reg2 = /o+/;
var str21 = "good";
var str22 = "gd";
console.log(reg2.test(str21));//true
console.log(reg2.test(str22));//false
//{n}
var reg3 = /o{3}/;
var str31 = "good";
var str32 = "goood";
console.log(reg3.test(str31));//false
console.log(reg3.test(str32));//true
//{n,}
var reg4 = /o{3,}/;//至少三个
var str41 = "good";
var str42 = "goood";
console.log(reg4.test(str41));//false
console.log(reg4.test(str42));//true
//{n,m}
var reg5 = /o{3,6}/;//3-6个o
var str51 = "good";
var str52 = "goood";
var str53 = "gooooood";
var str54 = "goooooood";
console.log(reg5.test(str51));//false
console.log(reg5.test(str52));//true
console.log(reg5.test(str53));//true
console.log(reg5.test(str54));//true
//?
var reg = /o?/;
var str1 = "gd";
var str2 = "god";
var str3 = "goood";
console.log(reg.test(str1));//true
console.log(reg.test(str2));//true
console.log(reg.test(str3));//true
```
:::

代表字符的

| 字符        | 描述        | 
| :------------- |:-------------| 
| . | 匹配字符串中除了换行符\n之外的所有字符      |    
|\d|   匹配一个数字字符。等价于 [0-9]。    |
|\D|   匹配一个非数字字符。等价于 [^0-9]。         |
|\w| 匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'。            |
|\W| 匹配非字母、数字、下划线。等价于 '[^A-Za-z0-9_]'。            |
::: details 点击查看代码
```javascript
// \d  匹配一个数字字符
var reg1 = /\d/;//匹配一个数值
var str11 = '111';
console.log(reg1.test(str11));//true
var result = reg1.exec(str11);//捕获匹配的字符串
console.log(result);//[ '1', index: 0, input: '111', groups: undefined ]
console.log(result[0]);//1
console.log(result.index);//0
console.log(result.input);//'111'
console.log(result.groups);//undefined
console.log(typeof result.groups);//undefined

// \D 匹配一个非数字字符
var reg2 = /\D/;
var str21 = "1";
var str22 = "a";
console.log(reg2.test(str21));//false
console.log(reg2.test(str22));//true
```
:::


集合相关
 
| 字符        | 描述       |
| :------------- |:-------------| 
| x ｜y |匹配 x 或 y|
|[xyz]|字符集合。匹配所包含的任意一个字符。|
|[^xyz]|负值字符集合。匹配未包含的任意字符。|
|[a-z]|字符范围。匹配指定范围内的任意字符。|
|[^a-z]|负值字符范围。匹配任何不在指定范围内的任意字符。|

::: details [x|y]
```javascript
//[x|y]
var reg1 = /x|y/;
var str11 = "xtttt";
console.log(reg1.test(str11));//true
//捕获
console.log(reg1.exec(str11));
//[ 'x', index: 0, input: 'xx', groups: undefined ]
```
:::

::: details [xyz]
```
//[xyz]  匹配所包含的任意一个字符。（只会匹配第一个）
var reg2 = /[abc]/;
var str21 = "plain";
var str22 = "blan";
console.log(reg2.test(str21));//true
console.log(reg2.test(str22));//true
//捕获
console.log(reg2.exec(str21));
//[ 'a', index: 2, input: 'plain', groups: undefined ]
console.log(reg2.exec(str22));
//[ 'b', index: 0, input: 'blan', groups: undefined ]
```
:::

::: details [^xyz]
```javascript
//[^xyz]:匹配未包含的任意字符。
var reg3 = /[^abc]/;
var str31 = "asdfghj";
console.log(reg3.test(str31));//true
//捕获
console.log(reg3.exec(str31));
//[ 's', index: 1, input: 'asdfghj', groups: undefined ]
```
:::

::: details [a-z]
```javascript
//[a-z]
var reg4 = /[a-z]/;
var str41 = '1abc';
console.log(reg4.test(str41));//true
console.log(reg4.exec(str41));
//[ 'a', index: 1, input: '1abc', groups: undefined ]
```
:::

::: details [^a-z]
```javascript
//[^a-z]
var reg5 = /[^a-z]/;
var str51 = "1abc";
console.log(reg5.test(str51));//true
console.log(reg5.exec(str51));
//[ '1', index: 0, input: '1abc', groups: undefined ]
```
:::

::: details [0-9]
```javascript
//[0-9]
var reg6 = /[0-9]/;
var str61 = 'a1234';
console.log(reg6.test(str61));//true
console.log(reg6.exec(str61));
//[ '1', index: 1, input: 'a1234', groups: undefined ]
```
:::


分组相关

| 字符        | 描述        | 
| :------------- |:-------------| 
|(pattern)|匹配并且捕获|
|?:pattern|匹配不捕获|
|?=pattern|正向预查|
|?!pattern|反向预查|
|?<=pattern||
|?<!pattern||

::: details 分组
```javascript
var reg = /(\w){3}/;//匹配3个字母并捕获这3个字母。和一个单字母的分组。
var reg1 = /(\w{3})/;//匹配3个字母，并且捕获3字母。和一个3字母的分组
var reg2 = /(\w)(\w)(\w)/;//匹配3个单词，并且捕获这3个字母。和3个单字母的分组。
var str = 'www.baidu.com';
console.log(reg.test(str));//true
console.log(reg.exec(str));
//[ 'www', 'w', index: 0, input: 'www.baidu.com', groups: undefined ]
console.log(reg1.exec(str));
//[ 'www', 'www', index: 0, input: 'www.baidu.com', groups: undefined ]
console.log(reg2.exec(str));
//['www','w','w','w',index: 0,input: 'www.baidu.com',groups: undefined]

```
:::

:::details 分组的反向引用
```javascript
//2、分组的方向引用
var reg = /(\w)\1/;
var str = 'www.baidu.com';
console.log(reg.exec(str));
//[ 'ww', 'w', index: 0, input: 'www.baidu.com', groups: undefined ]

var reg1 = /(\w)(\w)\1\2/;//匹配并捕获ABAB型字符串。和捕获两个单字母分组。
var str1 = 'www.baidu.com';
var str2 = 'abab';
console.log(reg1.test(str1));//false
console.log(reg1.exec(str1));//null
console.log(reg1.test(str2));//true
console.log(reg1.exec(str2));
//[ 'abab', 'a', 'b', index: 0, input: 'abab', groups: undefined ]
```
:::

::: details 分组的匹配不捕获
```javascript
//分组匹配不捕获
//单字符作为一个分组
var reg = /(?:\w)/;
var reg1 = /(\w)/;
var str = "bbs";
console.log(reg.exec(str));
//[ 'b', index: 0, input: 'bbs', groups: undefined ]
console.log(reg1.exec(str));
//[ 'b', 'b', index: 0, input: 'bbs', groups: undefined ]

//多个字符、多个分组
var reg = /(\w)(?:\w)(\w)/;
var str = 'abc.baidu.com';
console.log(reg.exec(str));
// ['abc', 'a', 'c', index: 0, input: 'abc.baidu.com', groups: undefined]


//匹配一个以字母b或者c开头，后面有多个非\n组成的字符串结尾的字符串，并且不捕获这个分组
var reg = /^(?:b|c).+$/;
//匹配一个以字母b或者c开头，后面有多个非\n组成的字符串结尾的字符串，并且捕获这个分组
var reg1 = /^(b|c).+$/;
var str = 'bbs.wangwei.com';
console.log(reg.exec(str));
// ['bbs.wangwei.com', index: 0, input: 'bbs.wangwei.com', groups: undefined]
console.log(reg1.exec(str));
// ['bbs.wangwei.com', 'b', index: 0, input: 'bbs.wangwei.com', groups: undefined]


//匹配不捕获和反向引用
//这样可以
var reg = /^(b|c)\1/;
var str = 'bbs.zhufengpeixun.cn';
console.log(reg.exec(str)); 
//[ 'bb', 'b', index: 0, input: 'bbs.zhufengpeixun.cn' ]
//不可以
var reg = /^(?:b|c)\1/;
var str = 'bbs.zhufengpeixun.cn';
console.log(reg.exec(str));//null

//附加
var reg4 = /^(?:b|c)/;
var str41 = 'bbs.zhufengpeixun.cn';
console.log(reg4.exec(str41));
//[ 'b',index: 0,input: 'bbs.zhufengpeixun.cn',groups: undefined ]
```
:::

::: details 正向预查 & 反向预查
```javascript
//正向预查
//(?=pattern)
//pattern不参与捕获，只是一个匹配条件,只是检查一下后面的字符是否符合要求而已。
var str1 = "wangwei1";
var str2 = "wangwei2";
//匹配字符串"wangwei1",捕获"wangwei"
var reg = /wangwei(?=1)/;
console.log(reg.test(str1));//true
console.log(reg.exec(str1));
// [ 'wangwei', index: 0, input: 'wangwei1', groups: undefined ]
console.log(reg.test(str2));//false
console.log(reg.exec(str2));//null


//反向预查
//(?=pattern)
//pattern不参与捕获，只是一个匹配条件,只是检查一下后面的字符是否符合要求而已。
var str21 = "wangwei21";
var str22 = "wangwei22";
var reg2 = /wangwei(?!21)/;
console.log(reg2.test(str21));//false
console.log(reg2.exec(str21));//null
console.log(reg2.test(str22));//true
console.log(reg2.exec(str22));
//[ 'wangwei', index: 0, input: 'wangwei22', groups: undefined ]
```
:::

非打印字符

| 字符        | 描述        | 
| :------------- |:-------------| 
|\s |匹配并且捕获|
|\S|匹配不捕获|
|\n|换行符|
|\f|换页符|
|\r|回车符|
|\t|制表符|
|\v|垂直制表符|



特殊字符

| 特别字符        | 描述        | 
| :------------- |:-------------| 
|$ |要匹配字符本身需要\\$|
|()|\\( 和 \)|
|*|\\*|
|+| \\+|
|.| \\.|
|[| \\[|
|?| \\?|
|\\| 使用两个斜杠\\\|
|^| \\^|
|{| \\{|
|｜| \\｜|

## 正则的方法
### replace
::: details replace基本
```javascript
var reg = /\w/;
var reg1 = /\w/g;
var str = "asdfg";
console.log(str.replace(reg, "W"));//Wsdfg

//2、全局捕获
console.log(str.replace(reg1, "W"));//WWWWW

//3、match:匹配
console.log(str.match(reg));//[ 'a', index: 0, input: 'asdfg', groups: undefined ]
console.log(reg.exec(str));//同上  只要不是全局捕获就会同上

console.log(str.match(reg1));//[ 'a', 's', 'd', 'f', 'g' ]
console.log(reg1.exec(str));//[ 'a', index: 0, input: 'asdfg', groups: undefined ]

```
:::

::: details replace & $ 
```javascript
var reg = /(\w+)\s(\w+)/;
var str = "ab cd efg";
console.log(str.replace(reg, "$2 $2"));//cd cd efg
```
:::

::: details  replace-function
```javascript
//1、没有全局捕获
var reg = /\w/;
var str = "asdfg";
var newStr = str.replace(reg,function (a,b,c) {
    console.log(a);//匹配的字符
    console.log(b);//匹配字符的索引
    console.log(c);//源字符串
    return b;//return的就是要替换成的字符
});
console.log(newStr);//0sdfg

//2、全局捕获
var reg2 = /\w/g;
var str2 = str.replace(reg2, function (a, b, c) {
    console.log(a);//所有匹配的字符
    console.log(b);//所有匹配的字符的索引
    console.log(c);//来源字符串
    return b
});
console.log(str2);//01234
```
:::

::: details replace-function & 分组运用
```javascript
//分组
var reg = /(\w)(\w)/;//两个连续的单词字符
var str = "abcdefg";
console.log(reg.exec(str));//[ 'ab', 'a', 'b', index: 0, input: 'asdfghj', groups: undefined ]

var res = str.replace(reg,function (a,b,c,d,e,f) {
    // console.log(a);//有分组，匹配的内容
    // console.log(b);//第一个分组的内容
    // console.log(c);//第二个分组的内容，之后也是以此类推
    // console.log(d);//如果有第三个分组，就是第三个分组，没有第三个分组就是匹配内容的索引
    // console.log(e);//源字符串
    // console.log(f);//如果上一个参数是源字符串，那他就是undefined
    return b
});
console.log(res);//acdefg

```
:::

::: details 小实例
```javascript
var str = "我是{0}，今年{1}岁，生日是{2}";
var reg = /{(\d)}/g;
var arr = ["wangwei","11","1020"];
var res = str.replace(reg,function (a,b,c,d) {
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    return arr[b]
});
console.log(res);//我是wangwei，今年11岁，生日是1020
```

## 常用正则表达式
手机验证码
邮箱验证...
这些一般之后总结


