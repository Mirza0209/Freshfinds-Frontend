import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     // Proxy API requests starting with /api
  //     "/api": {
  //       target: "http://localhost:5000",
  //       changeOrigin: true,
  //       secure: false,
  //       // rewrite path if needed (optional)
  //       // rewrite: (path) => path.replace(/^\/api/, '')
  //     },
  //   },
  // },
});
