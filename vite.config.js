import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 用于拼接路径或转换绝对路径
import { fileURLToPath } from "url"; //把url转为文件的路径
import eslint from "vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";


const __filename = fileURLToPath(import.meta.url); // 转换meta url
const __dirname = path.dirname(__filename); // 生成工作路径
// 定义工作函数
const createAlias = (dirName) => path.resolve(__dirname, `src/${dirName}`);
//  components => /你的项目根目录/src/components

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      eslint(),
      tailwindcss({}),
      svgr(),
  ], // 插件
  server: {
    port: 3000,
  },
  // 配置路径别名
  resolve: {
    alias: {
      "@": createAlias(""), // src/， 项目根路径
      "@components": createAlias("components"), // src/components/,组件专用通道
      "~img": createAlias("assets/images"), // src/assets/images/,图片资源通道
      "#types": createAlias("/types"), // src/types/,TS类型定义目录
    },
  },
});
