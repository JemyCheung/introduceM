module.exports = {
  title: '爱上黑科技',
  tagline: '开始了解我',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JemyCheung',
  projectName: 'introduceM',
  themeConfig: {
    navbar: {
    
      items: [
        {
          docId: 'introduce/introduce',
          label: '简历',
          type: 'doc',
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
              to:'/'
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
