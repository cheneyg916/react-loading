import { defineConfig } from 'dumi';

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
  themeConfig: {
    name: 'react-loading',
    base: '/react-loading/',
    // logo: 'https://cdn.staticaly.com/gh/cheneyg916/transTool@master/xxx/高清logo透明底原色字.6dujcm1vet40.webp',
    footer: `<a
    href="https://beian.miit.gov.cn"
    target="_blank"
    rel="noreferrer"
    style="color: #7f7f8e"
  >
    陇ICP备2022002976号-1
  </a>`,
  },
});
