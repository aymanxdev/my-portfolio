export default {
  widgets: [
    {
      name: "sanity-tutorials",
      options: {
        templateRepoId: "sanity-io/sanity-template-gatsby-portfolio"
      }
    },
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "607a35ad96b0b034adcabb08",
                  title: "Sanity Studio",
                  name: "my-portfolio-studio-2z3ppwqf",
                  apiId: "b3c1b101-2a47-4d6a-9373-64f18ef926e5"
                },
                {
                  buildHookId: "607a35ad007437421c6d2397",
                  title: "Portfolio Website",
                  name: "my-portfolio-web-hb6rzt7n",
                  apiId: "cc47c1f2-6291-4290-bcba-6f21c1874977"
                }
              ]
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/aymanxdev/my-portfolio",
            category: "Code"
          },
          {
            title: "Frontend",
            value: "https://aymanio.netlify.app/",
            category: "apps"
          }
        ]
      }
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: { title: "Recent projects", order: "_createdAt desc", types: ["sampleProject"] },
      layout: { width: "medium" }
    }
  ]
};
