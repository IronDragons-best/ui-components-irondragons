import path, { resolve } from 'path'

import { defineConfig } from 'vite'

import { dependencies, devDependencies } from './package.json'

import {viteStaticCopy} from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
      },
    },
  },
  // plugins: [
  //   viteStaticCopy({
  //     targets: [
  //       {
  //         src: 'src/assets/fonts/*', // путь к ассетам
  //         dest: 'assets', // куда копировать в dist
  //       },
  //       // {
  //       //   src: 'src/styles/**/*',
  //       //   dest: 'styles',
  //       // },
  //     ],
  //   }),
  // ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui-components-irondragons',
      // the proper extensions will be added
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
      output: {
        dir: 'dist',
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
})
