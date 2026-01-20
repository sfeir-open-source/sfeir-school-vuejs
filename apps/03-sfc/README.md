# 03 - SFC

## Goal

Move the inline template into a Vue Single File Component (SFC) and build a simple header layout with Ant Design Vue.

## What you will learn

- How to create a `.vue` Single File Component
- How to render an SFC from `main.ts`
- How to scope styles and target Ant Design Vue internals

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 03-sfc
```

2. Create a new component at `apps/03-sfc/src/App.vue`:

- Use `<script setup lang="ts">`
- Add a `<template>` that renders an Ant Design `<a-page-header>` inside a `<header>`
- Add the SFEIR People logo from `/images/logo-people.svg`
- Add two links/labels: `HOME` and `PEOPLE`

3. Move the app wiring to use the SFC in `apps/03-sfc/src/main.ts`:

- Import `App` from `./App.vue`
- Create the app with `createApp(App)`
- Keep the Ant Design Vue plugin registration
- Mount to `#root`

4. Style the header in `apps/03-sfc/src/App.vue`:

- Use `<style scoped lang="scss">`
- Style the Ant Design page header background and height
- Use `:deep` to target the `.ant-page-header-content` container
- Align the logo on the left and links on the right with spacing

## Expected result

You should see a header bar with the SFEIR People logo on the left and `HOME` / `PEOPLE` links on the right.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 03-sfc-solution
```

You can also inspect the reference code in `apps/03-sfc-solution`.
