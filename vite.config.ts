import { resolve } from 'path';
import { defineConfig } from 'vite';
import { dependencies, devDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui-components-irondragons',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'es',
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
});
