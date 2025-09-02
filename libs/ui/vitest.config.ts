import { defineConfig } from 'vitest/config'; // 테스트 러너 설정 API

export default defineConfig({
  test: {
    environment: 'jsdom', // 브라우저 DOM 시뮬레이션
    setupFiles: ['./vitest.setup.ts'], // 공통 매처/설정 주입
    css: false, // CSS 파싱 비활성(속도/안정성)
    coverage: {
      // 커버리지 정책
      provider: 'v8',
      all: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      thresholds: {
        lines: 100,
        branches: 100,
        functions: 100,
        statements: 100,
      },
      reporter: ['text', 'html'],
    },
  },
});
