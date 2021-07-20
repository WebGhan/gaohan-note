module.exports = {
  base: '/gaohan-note/',
  title: '前端笔记',
  description: '高寒的前端笔记',
  head: [
    ['link', { rel: 'icon', href: '/hero.png' }]
  ],

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'WebGhan/gaohan-note',
    nav: [
      {
        text: '指南',
        link: '/guide/',
      }
    ],
    sidebar: {
      '/guide/': [{
        title: '指南',
        collapsable: false,
        children: [
          '',
          'child1',
          'getting-started',
          'markdown',
        ]
      }]
    },
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  }
}