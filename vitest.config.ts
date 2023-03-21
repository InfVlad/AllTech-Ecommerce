import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ['vitest.setup.ts', 'setup-test.ts'],
    exclude: [...configDefaults.exclude, '**/*.int.test.ts'],
    environment: 'happy-dom',
    // environmentMatchGlobs: [
    //   // all tests in tests/dom will run in jsdom
    //   ['**/*!(.int).test.ts', 'jsdom'],
    //   // all tests in tests/ with .int.test.ts will run in node
    //   ['**/*.int.test.ts', 'node'],
    //   // ...
    // ],
  },
  resolve: {
    alias: {
      '~': '/src',
    },
  },
});
