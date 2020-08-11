## 日期格式化方法
| Tables        | Are           | 
| ------------- |:-------------:|
| toDateString()    | 星期几、月、日、年 | 
| toTimeString()  | 时、分、秒、时区      | 
| toLocaleDateString() | 星期几、月、日、年   |   
| toLocaleTimeString() | 时、分、秒      |    
| toUTCString() | 完整的UTC日期     |    

与toLocaleString和toString方法一样，以上这些字符串格式方法的输出也是因浏览器而异的，因此没有哪一个方法能够用来在用户界面中显示一致的日期信息。




## 日期/时间组件方法
```javascript
  var date = new Date()
    console.log(date.getFullYear());//2019
    console.log(date.getMonth());//4
    console.log(date.getDate());//6
    console.log(date.getDay());//1
    console.log(date.getHours());//13
    console.log(date.getMinutes());//42
    console.log(date.getSeconds());//21
    console.log(date.getMilliseconds());//21

    console.log(date.getTime());//返回1970.1.1到现在的毫秒数

    //将get改成set就是设置时间
```
