## HTTP首部
HTTP协议的请求和响应报文中必定包含HTTP首部，只是平时在使用WEB的过程中感受不到它。

## HTTP报文首部
**通用首部**：请求报文和响应报文都会使用的首部。

**请求首部**：从客户端向服务器端发送请求报文使用的首部。

**响应首部**：从服务器端向客户端返回响应报文时使用的首部。

**实体首部**：针对请求报文和响应报文的实体部分使用的首部。

**扩展首部**

## 通用首部
**通用的信息性首部**
| 通用首部      |    描述| 
| :-------- | :-------- | 
| Connection  | 管理持久连接 |   
| Date  | 创建报文的日期时间     |  
| Trailer  | 如果报文采用了分段传输编码方式，就可以用这个首部列出位于报文拖挂（trailer）部分的首部集合 | 
| Transfer-Encoding  | 指定报文主体的传输编码格式 | 
| Upgrade | 升级为其他协议 | 
| Via | 代理服务器的相关信息 | 
| Warning | 错误通知 | 

**通用缓存首部**
| 通用首部      |    描述| 
| :-------- | :-------- | 
| Cache-Control  | 控制缓存的行为 |   
| Pragma  | 报文指令     |  

## 请求首部

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


## 响应首部

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

## 实体首部


