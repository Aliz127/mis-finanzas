import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  base: "./",
  build: { chunkSizeWarningLimit: 2500 },
  plugins: [VitePWA({
    registerType: "autoUpdate",
    workbox: { maximumFileSizeToCacheInBytes: 6000000 },
    manifest: {
      name: "Mis finanzas", short_name: "Finanzas", lang: "es",
      start_url: "./", scope: "./", display: "standalone",
      background_color: "#f6f5f1", theme_color: "#1f6f5c",
      icons: [
        { src: "icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "icon-512.png", sizes: "512x512", type: "image/png" },
        { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
      ]
    }
  })]
});
