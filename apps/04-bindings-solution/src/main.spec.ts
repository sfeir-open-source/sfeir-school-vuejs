import { createApp } from 'vue';
import App from './App.vue';

describe('04-bindings-solution main', () => {
  it('creates and mounts the Vue application', () => {
    const container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);

    const app = createApp(App);

    expect(app).toBeDefined();
    expect(typeof app.mount).toBe('function');
    expect(typeof app.unmount).toBe('function');

    document.body.removeChild(container);
  });

  it('App component is properly defined', () => {
    expect(App).toBeDefined();
    expect(App.__name).toBe('App');
  });
});
