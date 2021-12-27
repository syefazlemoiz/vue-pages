/*import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/vue-pages/",
  plugins: [vue()],
});*/

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vs-pages/" : "/",
};
