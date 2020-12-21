export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fe06b6ad3466ceabeab37bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4kxwudim',
                  apiId: '9fae3da1-057b-4739-baac-dd127c46d7f9'
                },
                {
                  buildHookId: '5fe06b6aab133d021439e43f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ofn1eees',
                  apiId: '99058aea-d6c3-4a17-b587-10792b4c4af9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cArlitXs/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ofn1eees.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
