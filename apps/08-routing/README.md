# 08 - Routing

## Goal

Introduce Vue Router in the people app so the Home page is rendered through the router instead of a direct component import.

## What you will learn

- How to configure Vue Router with hash history
- How to declare a redirect and a named route
- How to mount the router in the Vue app
- How to render a routed view with `<RouterView />`

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 08-routing
```

2. Start the API server (required for people data):

```bash
npx nx serve server-express
```

The API should be available at `http://localhost:9000/api`.

3. Verify the base API URL:

- Check `apps/08-routing/.env`
- It should define:

```env
VITE_BASE_API = "http://localhost:9000/api"
```

4. Create the router:

- Add `apps/08-routing/src/router/index.ts`
- Use `createRouter` and `createWebHashHistory`
- Declare routes:
  - `/` should redirect to `/home`
  - `/home` should render the `Home` page and be named `home`
- Export the router as `APP_ROUTING`

5. Wire the router in the app entry:

- Update `apps/08-routing/src/main.ts` to import `APP_ROUTING`
- Register it with `app.use(APP_ROUTING)` before mounting

6. Render the routed view:

- Update `apps/08-routing/src/App.vue`
- Replace the direct `<Home />` usage with `<RouterView />`
- Keep the header layout as-is

## Expected result

The app loads on `#/home`, shows the same people card, and navigation is now handled through Vue Router.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 08-routing-solution
```

You can also inspect the reference code in `apps/08-routing-solution`.
