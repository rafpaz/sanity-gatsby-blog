export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea68454a4028d871838c567',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-m7ff4575',
                  apiId: '7348d339-cc04-469b-ad75-724b0f9d7f52'
                },
                {
                  buildHookId: '5ea68454b83dec6a7f0c47b3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-v3tu2dqs',
                  apiId: '2fd3517b-f507-44c2-b654-f05796ab8a35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/solimer/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-v3tu2dqs.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
