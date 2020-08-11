
module.exports = {
    title:'灵犀阁',
    description:'本项目作为笔记使用',
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
    base: '/docs/',//如果部署到xxx.io,不是这么设置。
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
                            {text: 'Vue.js', link: '/language/chinese/'},
                            {text: 'React.js', link: '/language/japanese/'}
                        ]
                    }
                ]
            },
            {text: '关于我', link: '/about'},
        ],
        // sidebar: 'auto'
        sidebar: {
            '/前端/': [
                {
                    title: '基本概念',
                    collapsable: false,
                    children: [
                        'JavaScript/0003.基本概念/0001.JS的基本概念',
                        'JavaScript/0003.基本概念/0002.JS的基本数据类型',
                        'JavaScript/0003.基本概念/0003.操作符',
                        'JavaScript/0003.基本概念/0004.JS语句',
                        'JavaScript/0003.基本概念/0005.函数',
                    ]
                }
            ],

        }
    },
    plugins: [
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
    ]
};