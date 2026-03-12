import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/", // IMPORTANTE: raiz do Vercel

    plugins: [
      react(),
      tailwindcss()
    ],

    server: {
      host: "0.0.0.0",
      port: 3000
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },

    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY)
    },

    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: false,
      target: "es2019"
    }
  };
});
