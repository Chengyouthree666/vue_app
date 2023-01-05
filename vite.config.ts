import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

// ELEMENTUI-PLUS 按需+自动引入【plugin】
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import dynamicImport from "vite-plugin-dynamic-import";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    vue(),
    vueJsx(),
    dynamicImport(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    // alias: [
    //   { find: "@", replacement: path.join(process.cwd(), "src") },
    //   {
    //     find: /* ~/ */ /^~(?=\/)/,
    //     replacement: path.join(process.cwd(), "node_modules"),
    //   },
    //   {
    //     find: /* ~ */ /^~(?!\/)/,
    //     replacement: path.join(process.cwd(), "node_modules/"),
    //   },
    // ],
    // 同 webpack 中的 extensions
    // extensions: [".vue", ".js", ".jsx", ".ts", ".tsx", ".json"],
  },
}));
