import { createApp } from 'vue';
import App from './App.vue';
import { APP_ROUTING } from './router';

vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue');

  return {
    ...actual,
    createApp: vi.fn(() => ({
      use: vi.fn().mockReturnThis(),
      mount: vi.fn(),
      unmount: vi.fn(),
    })),
  };
});

describe('12-form-solution main', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('creates the app and wires the router before mounting', async () => {
    await import('./main');

    expect(createApp).toHaveBeenCalledWith(App);

    const appInstance = vi.mocked(createApp).mock.results[0]?.value;
    expect(appInstance.use).toHaveBeenCalledWith(APP_ROUTING);
    expect(appInstance.mount).toHaveBeenCalledWith('#root');
  });

  it('App component is properly defined', () => {
    expect(App).toBeDefined();
  });
});
