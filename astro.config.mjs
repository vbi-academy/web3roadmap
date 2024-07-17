import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://web3roadmap.com",
  output: "hybrid",
  adapter: vercel(),
  integrations: [react(), tailwind(), sitemap()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("roadmaps")) {
              return "roadmaps";
            }
          },
        },
      },
    },
    optimizeDeps: {
      include: ["src/data/roadmaps/**/*.md"],
    },
  },
  typescript: {
    tsconfig: "./tsconfig.json",
  },
});
