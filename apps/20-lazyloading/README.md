# 20 - Lazy Loading

## Goal

Improve route loading by lazy-loading non-critical pages so the app can load faster on first render.

## What you will learn

- How to lazy-load Vue pages with dynamic `import(...)`
- How to configure lazy-loaded route components in Vue Router
- How to keep critical routes eager while deferring secondary pages
- How to validate route behavior with unit tests

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 20-lazyloading
```

2. Open `apps/20-lazyloading/src/router/index.ts` and identify eagerly imported pages.

3. Keep the home route eager:

- Keep `Home` imported normally
- Keep `/home` using the eager component

4. Lazy-load the other pages:

- Replace direct imports for `People` and `Details`
- Use dynamic imports in route components for:
  - `/people`
  - `/people/:id`

5. Ensure route configuration still works:

- Root path `/` redirects to `/home`
- Details route keeps `props: true`
- Route names remain `home`, `people`, and `details`

6. Run the tests:

```bash
npx nx test 20-lazyloading
```

## Expected result

- The app keeps the home page immediately available
- People and Details pages are loaded only when their routes are visited
- Existing behavior is unchanged from a user perspective
- Test suite stays green

## Need the solution?

Run the solution app:

```bash
npm start -- 20-lazyloading-solution
```

You can compare your work with `apps/20-lazyloading-solution`.
