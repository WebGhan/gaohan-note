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
      },
      {
        text: '规范',
        link: '/standard/',
      }
    ],
    sidebar: {
      '/guide/': [{
        title: '指南',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '',
          'child1',
          'getting-started',
          'markdown',
        ]
      }],
      '/standard/': [{
        title: '规范',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '',
          'vue-style-guide',
          'vue-directory',
          'css-style-guide',
        ]
      }]
    },
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  }
}