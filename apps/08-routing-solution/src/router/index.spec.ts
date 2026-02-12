import { APP_ROUTING } from './index';

describe('APP_ROUTING', () => {
  it('registers the home route', () => {
    const routes = APP_ROUTING.getRoutes();
    const homeRoute = routes.find(route => route.path === '/home');

    expect(homeRoute).toBeDefined();
    expect(homeRoute?.name).toBe('home');
  });

  it('redirects the root path to /home', () => {
    const routes = APP_ROUTING.getRoutes();
    const rootRoute = routes.find(route => route.path === '/');

    expect(rootRoute).toBeDefined();
    expect(rootRoute?.redirect).toBe('/home');
  });
});
