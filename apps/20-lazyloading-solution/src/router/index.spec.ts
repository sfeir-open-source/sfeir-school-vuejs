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
    expect(peopleRoute?.components?.default).toBeTypeOf('function');
  });

  it('registers the details route with id param and props', () => {
    const routes = APP_ROUTING.getRoutes();
    const detailsRoute = routes.find(route => route.path === '/people/:id');

    expect(detailsRoute).toBeDefined();
    expect(detailsRoute?.name).toBe('details');
    expect(detailsRoute?.props).toEqual({ default: true });
    expect(detailsRoute?.components?.default).toBeTypeOf('function');
  });

  it('lazy-loads the people page component', async () => {
    const routes = APP_ROUTING.getRoutes();
    const peopleRoute = routes.find(route => route.path === '/people');
    const loadPeople = peopleRoute?.components?.default as (() => Promise<{ default: unknown }>) | undefined;

    expect(loadPeople).toBeDefined();
    await expect(loadPeople?.()).resolves.toMatchObject({ default: expect.anything() });
  });

  it('lazy-loads the details page component', async () => {
    const routes = APP_ROUTING.getRoutes();
    const detailsRoute = routes.find(route => route.path === '/people/:id');
    const loadDetails = detailsRoute?.components?.default as (() => Promise<{ default: unknown }>) | undefined;

    expect(loadDetails).toBeDefined();
    await expect(loadDetails?.()).resolves.toMatchObject({ default: expect.anything() });
  });
});
