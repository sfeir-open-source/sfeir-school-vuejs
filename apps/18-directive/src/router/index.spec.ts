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

  it('registers the people route', () => {
    const routes = APP_ROUTING.getRoutes();
    const peopleRoute = routes.find(route => route.path === '/people');

    expect(peopleRoute).toBeDefined();
    expect(peopleRoute?.name).toBe('people');
  });

  it('registers the details route with id param and props', () => {
    const routes = APP_ROUTING.getRoutes();
    const detailsRoute = routes.find(route => route.path === '/people/:id');

    expect(detailsRoute).toBeDefined();
    expect(detailsRoute?.name).toBe('details');
    expect(detailsRoute?.props).toEqual({ default: true });
  });
});
