module.exports = {
  base: '/gaohan-note/',
  title: '前端笔记',
  description: '高寒的前端笔记',
  head: [
    ['link', { rel: 'icon', href: '/hero.png' }]
  ],

  themeConfig: {
    repo: 'WebGhan/gaohan-note',
    nav: [
      {
        text: '项目指南',
        link: '/guide/',
      },
      // {
      //   text: '规范',
      //   link: '/standard/',
      // }
    ],
    sidebar: {
      '/guide/': [{
        title: 'Vue 项目',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '',
          'style-guide.md',
          'new-page.md',
          'list-page.md',
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
    smoothScroll: true
  }
}