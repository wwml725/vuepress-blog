# vuepress个人博客
VuePress中文官网：https://www.vuepress.cn
源码地址：https://github.com/wwml725/vuepress-blog
博客地址：https://wwml725.github.io/vuepress-blog

![enter image description here](https://user-gold-cdn.xitu.io/2020/4/6/1714f514eb24de9d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

--------
## 启动
```
yarn docs:dev
```

## 修改之后，提交至github
```
yarn deploy
```
- 这个命令是将修改或者新添加的数据推送至分支，没有修改master分支，怎么在deploy中添加推送至master分支，有没有必要添加


## 创建github项目
- 在github网站上，创建一个新的项目docs
![Alt text](./360截图18270612304864.png)

- 通过git bash将项目克隆到一个文件夹中
```
git clone git@github.com:wwml725/docs.git
```

-------------------------------------------------------------

##  创建vuepress项目
```
npm install -g vuepress
```

```
cd docs
npm init -y
echo '# Hello VuePress!' > README.md

vuepress dev  //运行项目
```

上面就可以看到一个服务了。
![Alt text](./360截图17350731273316.png)


在docs目录中：
```
mkdir docs   //根据官网创建一个docs目录
ll  //查看目录中的文件
echo '# Hello VuePress!' > docs/README.md
```

接着，在 package.json 里加一些脚本:
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}

```

此时输入下面的命令就可以启动项目了
```
npm run docs:dev  
```
--------------------------------------------------------------------------------------------------------------------
## 部署到github
```
git config -l   //查看关联的仓库
```


#### 第一步
在 docs/.vuepress/config.js 中设置正确的 base。

如果你打算发布到 https://<USERNAME>.github.io/，则可以省略这一步，因为 base 默认即是 "/"。

如果你打算发布到 https://<USERNAME>.github.io/docs/（也就是说你的仓库在 https://github.com/<USERNAME>/docs），则将 base 设置为 "/docs/"。


![Alt text](./360截图1799101693106120.png)

此时再运行项目就需要访问：http://localhost:8080/docs/

#### 第二
在你的项目中，创建一个如下的 deploy.sh 文件（请自行判断去掉高亮行的注释）:

```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:wwml725/docs.git master:gh-pages
cd -
```

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh"

  },
```

运行
```
yarn deploy
```
![Alt text](./360截图18720124223844.png)

![Alt text](./360截图16720404628947.png)

点击gh-pages,---setting---下拉找到地址https://wwml725.github.io/docs/


以后每一次写完新文件之后，只需要执行 yarn deploy 命令，https://wwml725.github.io/docs/就会自动更新