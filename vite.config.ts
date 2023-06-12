import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { buildPlugin } from 'vite-plugin-build';
import { resolve } from 'node:path';

export const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  antd: 'Antd',
  classnames: 'Classnames',
  recharts: 'Recharts',
  'recharts-scale': 'RechartsScale',
  'business-utils': 'BusinessUtils',
};
// 处理类库使用到的外部依赖
// 确保外部化处理那些你不想打包进库的依赖
export const EXTERNAL = ['react', 'react-dom', 'antd', 'classnames', 'recharts', 'recharts-scale', 'business-utils'];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    buildPlugin({
      libBuild: {
        buildOptions: {
          rollupOptions: {
            external: EXTERNAL,
            output: { globals: GLOBALS },
          },
          lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'lazy-prictures',
            formats: ['umd'],
            fileName: (format) => `lazy-prictures.js`,
          },
        },
      },
    }),
  ]
});
