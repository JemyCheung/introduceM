module.exports = {
  title: '爱上黑科技',
  tagline: '开始了解我',
  url: 'http://www.ijemy.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JemyCheung',
  projectName: 'introduceM',
  themeConfig: {
    navbar: {

      items: [
        {
          label: '简历',
          to:'/introduce',
          position: 'left',
        },

        {
          href: 'https://github.com/JemyCheung',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/JemyCheung'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/JemyCheung',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '鄂ICP备18019346号-2',
              href:'https://beian.miit.gov.cn/#/Integrated/index'
            },
            {
              label: '联系电话：17321129884',
              to:'/introduce'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 爱上黑科技`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
