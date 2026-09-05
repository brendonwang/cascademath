import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

const cloudflareAnalyticsSrc = "https://static.cloudflareinsights.com/beacon.min.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const analyticsToken = env.VITE_CLOUDFLARE_ANALYTICS_TOKEN?.trim();

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...(analyticsToken
        ? [
            {
              name: "cloudflare-web-analytics",
              transformIndexHtml() {
                return {
                  tags: [
                    {
                      tag: "script",
                      attrs: {
                        type: "module",
                        src: cloudflareAnalyticsSrc,
                        "data-cf-beacon": JSON.stringify({ token: analyticsToken }),
                      },
                      injectTo: "body",
                    },
                  ],
                };
              },
            },
          ]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: "./src/test/setup.ts",
    },
  };
});
