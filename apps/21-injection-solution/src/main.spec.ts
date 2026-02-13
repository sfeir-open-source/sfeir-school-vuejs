import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { APP_ROUTING } from './router';
import { getInjection, PEOPLE_SERVICE_TOKEN } from './token-injection';

vi.mock('pinia', async () => {
  const actual = await vi.importActual<typeof import('pinia')>('pinia');

  return {
    ...actual,
    createPinia: vi.fn(() => ({ __pinia: true })),
  };
});

vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue');

  return {
    ...actual,
    createApp: vi.fn(() => ({
      provide: vi.fn().mockReturnThis(),
      use: vi.fn().mockReturnThis(),
      mount: vi.fn(),
      unmount: vi.fn(),
    })),
  };
});

const injectedPeopleService = { __peopleService: true };

vi.mock('./token-injection', async () => {
  const actual = await vi.importActual<typeof import('./token-injection')>('./token-injection');
  return {
    ...actual,
    getInjection: vi.fn(() => injectedPeopleService),
  };
});

describe('21-injection-solution main', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('creates the app and wires router and pinia before mounting', async () => {
    await import('./main');

    expect(createApp).toHaveBeenCalledWith(App);
    expect(createPinia).toHaveBeenCalledTimes(1);

    const appInstance = vi.mocked(createApp).mock.results[0]?.value;
    expect(appInstance.provide).toHaveBeenCalledTimes(1);
    expect(getInjection).toHaveBeenCalledWith(PEOPLE_SERVICE_TOKEN);
    expect(appInstance.provide).toHaveBeenCalledWith(PEOPLE_SERVICE_TOKEN, injectedPeopleService);
    expect(appInstance.use).toHaveBeenCalledWith(APP_ROUTING);
    expect(appInstance.use).toHaveBeenCalledWith(vi.mocked(createPinia).mock.results[0]?.value);
    expect(appInstance.mount).toHaveBeenCalledWith('#root');
  });

  it('App component is properly defined', () => {
    expect(App).toBeDefined();
  });
});
