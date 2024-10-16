import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // TODO: this is to make ecosystem work, remove when fixed
    // fs: {
    //   strict: false,
    // },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [TanStackRouterVite(), react()],
  test: {
    setupFiles: ["vitest-browser-react"],
    browser: {
      enabled: true,
      name: "firefox",
      provider: "playwright",
    },
  },
});
