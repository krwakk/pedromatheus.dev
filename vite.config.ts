import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Forma moderna de fazer o alias do "@" no Vite (ESM)
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});