module.exports = {
  base: '/gaohan-note/',
  title: '项目规范',
  description: '只争朝夕，不负韶华',
  head: [
    ['link', { rel: 'icon', href: '/hero.png' }]
  ],

  themeConfig: {
    repo: 'WebGhan/gaohan-note',
    // nav: [
    //   {
    //     text: '指南',
    //     link: '/guide/',
    //   }
    // ],
    sidebar: {
      '/': [
        {
          title: '基础',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/guide/standard-js',
            '/guide/standard-css',
          ]
        },
        {
          title: 'Vue2 项目',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/guide/',
            '/guide/style-guide',
            '/guide/new-page',
            '/guide/list-page',
            '/guide/permission',
          ]
        },
        // {
        //   title: '规范',
        //   collapsable: false,
        //   sidebarDepth: 2,
        //   children: [
        //     '/guide/vue-style-guide',
        //     '/guide/vue-directory'
        //   ]
        // }
      ]
    },
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true
  },
  plugins: [
    ['vuepress-plugin-code-copy', true]
  ]
}