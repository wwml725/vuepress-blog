# HTTP报文
HTTP报文：用于HTTP协议交互的信息被称为HTTP报文。

HTTP报文是有多行数据构成的字符串文本。

HTTP报文大致可以分为报文首部和报文主体。

客户端的HTTP报文叫做请求报文。

服务端的HTTP报文叫做响应报文。

所有的HTTP报文都可以分为两类：请求报文和响应报文。

请求报文会向web服务器请求一个动作。

响应报文会将请求的结果返回给客户端。


## HTTP报文分为两部分
HTTP 报文大致可分为报文首部和报文主体两块。两者由最初出现的 空行（CR+LF）来划分。通常，并不一定要有报文主体。


## 请求报文
请求报文有5部分组成：请求方法、请求路径、请求URL、HTTP协议版本号、可选的请求首部和内容。

**请求行：** 
- 方法：GET、POST...
- URL：描述了要对哪一个资源执行这个方法。
- HTTP版本

**请求首**：请求首部只存在于请求报文中，提供客户端的信息以及对服务器的要求，例如：Accept开头的首部，能让服务器知道客户端想得到什么。


| 首部      |    描述| 
| :-------- | :-------- | 
| Accept  | 可接受的MIME类型  |   
| Accept-Charset  | 可接受的字符集     |  
| Accept-Encoding  | 可接受的编码格式，服务器按指定的编码格式压缩数据     |  
| Accept-Language  | 可接受的语言种类   |  
| Host  | 服务器域名和端口    |   
| ReFerer  | 上一个页面地址  |   
| User-Agent  | 用户代理信息，例如操作系统、浏览器、版本号等 | 
```
Accept:            application/json, text/javascript 
Accept-Encoding:   gzip, deflate
Accept-Language:   zh-CN,zh;q=0.9
Connection:        keep-alive
Host:              www.baidu.com
Referer:           https://www.baidu.com/
User-Agent:        Mozilla/5.0 (Windows NT 10.0; WOW64) 
                   AppleWebKit/537.36 (KHTML, like Gecko) 
                   Chrome/63.0.3239.132 Safari/537.36      
```

**MIME类型**：就是媒体类型，Accept首部能同时指定多种媒体类型，用逗号隔开。每种媒体类型能分别增加权重，用q表示权重值，累心和权重之间用分号分隔，q的范围在0~1之间，值越大优先级越高。

**请求体**


## 响应报文
**响应行**
- 协议版本号
- HTTP状态码

**响应首**

| 响应首部      |    描述| 
| :-------- | :-------- | 
| Accept-Ranges  | 服务器接受的范围类型  |   
| Server  | 服务器软件的名称和版本     |  
| Age  | 响应存在的时间，单位为秒，这个手部可能由代理发出     | 
 
```
Accept-Ranges :bytes
Server:nginx/1.4.2
Age: 600
```

响应体

