import AntDesignVue from 'ant-design-vue';
import { createApp } from 'vue';

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

describe('02-ant-design-solution main', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it('creates the app, registers Ant Design Vue and mounts on #app', async () => {
    await import('./main');

    expect(createApp).toHaveBeenCalledTimes(1);
    const appDefinition = vi.mocked(createApp).mock.calls[0]?.[0];
    expect(appDefinition).toBeDefined();
    expect(appDefinition.template).toContain('Hello and Welcome');
    expect(appDefinition.setup().name).toBe('SFEIR');

    const appInstance = vi.mocked(createApp).mock.results[0]?.value;
    expect(appInstance.use).toHaveBeenCalledWith(AntDesignVue);
    expect(appInstance.mount).toHaveBeenCalledWith('#app');
  });
});
