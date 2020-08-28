module.exports = {
    title: '灵犀阁',
    description: '本项目作为笔记使用',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'author', content: 'vuepress项目'}],
        ['meta', {name: 'keywords', content: 'vuepress 介绍,vuepress 说明，vuepress项目',}],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    base: '/vuepress-blog/',//如果部署到xxx.io,不是这么设置。
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        logo: '/assets/img/logo.png',
        nav: [
            {
                text: '前端',
                items: [
                    {
                        text: '基础',
                        items: [
                            {text: 'HTML&CSS', link: '/language/chinese/'},
                            {text: 'JavaScript', link: '/2020-01-01-JS的基本概念/'}
                        ]
                    },
                    {
                        text: '框架',
                        items: [
                            {text: 'Vue.js', link: '/2020-01-01-vue基础/'},
                            {text: 'React.js', link: '/language/japanese/'}
                        ]
                    }
                ]
            },
            {
                text: '进阶',
                items: [
                    {text: 'JS设计模式', link: '/JS设计模式/'},
                    {text: 'HTTP知识点', link: '/HTTP知识点/'},
                ]
            },

            {text: 'Guide', link: '/guide/'},
            {text: '关于我', link: '/about'},
        ],
        // sidebar: 'auto'
        sidebar: {
            '/JavaScript/': [
                {
                    title: '基本概念',
                    children: [
                        '0003.基本概念/0001.JS的基本概念',
                        '0003.基本概念/0002.JS的基本数据类型',
                        '0003.基本概念/0003.操作符',
                        '0003.基本概念/0004.JS语句',
                        '0003.基本概念/0005.函数',
                    ]
                },
                {
                    title: '变量、作用域和内存问题',
                    children: [
                        '0004.变量、作用域和内存问题/0001.相关基本概念',
                        '0004.变量、作用域和内存问题/0002.执行环境和作用域',
                        '0004.变量、作用域和内存问题/0003.This指向问题',
                        '0004.变量、作用域和内存问题/0004.call&apply&bind',
                    ]
                },
                {
                    title: '引用类型',
                    children: [
                        '0005.引用类型/Array类型',
                        '0005.引用类型/Date类型',
                        '0005.引用类型/Function类型',
                        '0005.引用类型/Object类型',
                        '0005.引用类型/RegExp类型',
                        '0005.引用类型/单体内置对象',
                        '0005.引用类型/基本包装类型'
                    ]
                },
                {
                    title: '面向对象的程序设计',
                    children: [
                        '0006.面向对象的程序设计/创建对象的几种方式',
                        '0006.面向对象的程序设计/理解对象',
                        '0006.面向对象的程序设计/继承',

                    ]
                },
                {
                    title: '函数表达式',
                    children: [
                        '0007.函数表达式/模仿块级作用域',
                        '0007.函数表达式/私有变量',
                        '0007.函数表达式/递归',
                        '0007.函数表达式/闭包',


                    ]
                },
            ],

            '/HTTP知识点/': [
                {
                    title: 'HTTP知识点',
                    collapsable: false,
                    children: [
                        ['', 'HTTP简介'],
                        ['OSI参考模型', 'OSI参考模型'],
                        ['TCP-IP体系结构', 'TCP-IP体系结构'],
                        ['HTTP报文和HTTP信息', 'HTTP报文和HTTP信息'],
                        ['HTTP请求方法', 'HTTP请求方法'],
                        ['HTTP状态码', 'HTTP状态码'],
                        ['HTTP首部', 'HTTP首部'],
                        ['HTTPS', 'HTTPS'],
                    ]
                },
            ],

            '/vue/':[
                {
                    title:'Vue知识点',
                    children:[
                        'vue基础',
                        'vuex',
                        'vue-cli',
                    ]
                }
            ]


        }
    },
    plugins: [
        /* 两个插件只能选一个 */
        ['@vuepress/plugin-back-to-top'],//返回到顶部按钮
        ['@vuepress/nprogress']//默认主题不需要安装 效果：打开新页面的时候有进度条显示
        // ['@vuepress/nprogress',false]//设置false就会禁止这个功能


        //moment这个插件，只是试试  Last Updated: 2020年8月11日星期二 03:02，这个格式不如默认的时间格式好用
        // [
        //     '@vuepress/last-updated',
        //     {
        //         transformer: (timestamp, lang) => {
        //             // 不要忘了安装 moment
        //             const moment = require('moment')
        //             moment.locale('zh-cn')
        //             return moment(timestamp).format('llll');
        //         }
        //     }
        // ]

    ],


};