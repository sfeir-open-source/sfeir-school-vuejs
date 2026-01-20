# 01 - Bootstrapping

## Goal

Bootstrap a minimal Vue 3 app by wiring `createApp` to the DOM and exposing a value that is rendered in the HTML template.

## What you will learn

- How to create and mount a Vue application with `createApp`
- How Vue uses an in-DOM template (the content inside `#app`)
- How to expose data from `setup` for template interpolation

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 01-bootstrapping
```

2. Add an in-DOM template in `apps/01-bootstrapping/index.html` so Vue can render something. Example:

```html
<div id="app">
  <span>Hello {{ name }}</span>
</div>
```

3. Bootstrap the Vue app in `apps/01-bootstrapping/src/main.ts`:

- Import `createApp` from `vue`
- Create the app with a `setup` function
- Expose a `name` value (use `SFEIR`)
- Mount the app to `#app`

## Expected result

When you open the page, you should see `Hello SFEIR` rendered in the browser.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 01-bootstrapping-solution
```

You can also inspect the reference code in `apps/01-bootstrapping-solution`.
