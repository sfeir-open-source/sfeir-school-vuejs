# 02 - Ant Design

## Goal

Integrate Ant Design Vue into the app and render a basic card using the component library.

## What you will learn

- How to install and register a UI library plugin with Vue
- How to import Ant Design Vue global styles
- How to use Ant Design Vue components in an in-DOM template

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 02-ant-design
```

2. Register Ant Design Vue in `apps/02-ant-design/src/main.ts`:

- Import the plugin from `ant-design-vue`
- Import the reset stylesheet from `ant-design-vue/dist/reset.css`
- Use `app.use(...)` before `mount`

3. Move the markup into the Vue app in `apps/02-ant-design/src/main.ts`:

- Replace the in-DOM template with an empty `<div id="app"></div>` in `apps/02-ant-design/index.html`
- Add a `template` in `createApp` that renders an Ant Design `<a-card>`
- Display the `name` value inside the card (wrap it in a `<p>` as in the solution)

## Expected result

You should see an Ant Design card titled "Hello and Welcome" with the text `SFEIR` inside it.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 02-ant-design-solution
```

You can also inspect the reference code in `apps/02-ant-design-solution`.
