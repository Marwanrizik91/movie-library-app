import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/lodash")) {
            return "lodash"; // Create a separate chunk for lodash
          }
          if (id.includes("node_modules/react")) {
            return "vendor"; // Create a separate chunk for React and other vendor libraries
          }
        },
      },
    },
  },
});
