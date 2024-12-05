import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Public Notes",
  description: "A Public Notes Site",
  lastUpdated: true ,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: 'https://zhaozhipeng.com' }
    ],

    sidebar: [
      {
        text: '杂项',
        collapsed: true,
        items: [
          { text: '常用软件记录', link: '/sundry/software' }
        ]
      },
      {
        text: 'Linux',
        collapsed: true,
        items: [
          { text: 'Linux的一些笔记', link: '/linux/Linux的一些笔记' },
          { text: 'Debian', link: '/linux/Debian' },
          { text: 'Ubuntu', link: '/linux/Ubuntu' },
          { text: 'CentOS', link: '/linux/CentOS' },
          { text: '鸟哥的Linux私房菜-基础学习篇', link: '/linux/鸟哥的Linux私房菜-基础学习篇' }
        ]
      },
      {
        text: 'DevOps',
        collapsed: true,
        items: [
          { text: 'DevOps', link: '/devops/intro' }
        ]
      },
      {
        text: '容器化',
        collapsed: true,
        items: [
          { text: 'Docker', link: '/docker/docker' }
        ]
      }
    ],
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/izzp/notes' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present zzp'
    },
    outline: [2,4],
  }
})
