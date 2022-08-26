import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'lib/index.ts',
      name: 'npm-module-starter',
      fileName: 'index',
    },
    rollupOptions: {
      // Exclude dependencies and peerDependencies from bundle as these will be installed by the consumer
      external: [
        // ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
      ],
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    dts({
      compilerOptions: {
        baseUrl: './src/',
        emitDeclarationOnly: true,
        noEmit: false,
      },
      outputDir: 'dist/types',
      exclude: ['src/vite-env.d.ts'], // Exclude global types used for dev
    }),
    EnvironmentPlugin({
      VITE_BASE_URL: './',
    }),
  ],
});
