import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import './vee-validate.config';

Object.defineProperty(globalThis, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(HTMLFormElement.prototype, 'submit', {
  configurable: true,
  value: vi.fn(),
});
