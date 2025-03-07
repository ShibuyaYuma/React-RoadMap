/*
Vitest: Vite 向けに最適化された 超高速テストフレームワーク

インストール方法1: npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom

インストール方法2: vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});

インストール方法3: import '@testing-library/jest-dom';

テストの実行: npx vitest
*/

export {};