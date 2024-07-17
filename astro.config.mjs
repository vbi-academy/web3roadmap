import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [react(), tailwind()],
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
});
