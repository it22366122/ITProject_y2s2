import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/API": {
        target: "http://localhost:3000",
        // You can add more options here if needed
        // For example:
        // changeOrigin: true,
        // rewrite: path => path.replace(/^\/API/, '/API/auth/signup'),
      },
    },
  },
  plugins: [react()],
});
