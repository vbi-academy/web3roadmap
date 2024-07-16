import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
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
