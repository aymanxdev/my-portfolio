//disable eslint
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget
} from "@sanity/dashboard";
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";
import { visionTool } from "@sanity/vision";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";

export default defineConfig({
  title: "Ayman Portfolio",
  projectId: "3xlzfqkt",
  dataset: "production",

  plugins: [
    dashboardTool({
      widgets: [
        sanityTutorialsWidget(),

        netlifyWidget({
          title: "My Netlify deploys",
          description:
            "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
          sites: [
            {
              title: "Sanity Studio",
              apiId: "b3c1b101-2a47-4d6a-9373-64f18ef926e5",
              buildHookId: "607a35ad96b0b034adcabb08",
              name: "my-portfolio-studio-2z3ppwqf"
            },
            {
              title: "Portfolio Website",
              apiId: "cc47c1f2-6291-4290-bcba-6f21c1874977",
              buildHookId: "607a35ad007437421c6d2397",
              name: "aymanio",
              url: "https://aymanio.netlify.app/"
            }
          ]
        }),
        projectUsersWidget({ layout: { height: "large" } }),
        documentListWidget({
          title: "Recent projects",
          order: "_createdAt desc",
          types: ["sampleProject"],
          layout: { width: "medium", height: "large" }
        }),
        projectInfoWidget({
          layout: { width: "medium", height: "medium" }
        })
      ]
    }),

    deskTool({
      structure: deskStructure
    }),
    visionTool()
  ],
  tools: prev => {
    // 👇 Uses environment variables set by Vite in development mode
    // Using process dot env as vite env variables are not supported in Netlify
    if (process.env.NODE_ENV === "development") {
      return prev;
    }
    return prev.filter(tool => tool.name !== "vision");
  },
  schema: {
    types: schemas
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(templateItem => templateItem.templateId !== "settings");
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === "settings") {
        return prev.filter(({ action }) => !["unpublish", "delete", "duplicate"].includes(action));
      }
      return prev;
    }
  }
});
