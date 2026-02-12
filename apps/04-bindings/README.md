# 04 - Bindings

## Goal

Build the first “People” card by binding Vue template values to real data and component props.

## What you will learn

- How to bind text and attributes with `{{ }}` and `:prop`
- How to use nested object data in templates
- How to wire Ant Design Vue components with bindings
- How to use the vue-ant-design documentation

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 04-bindings
```

2. Create the Home page in `apps/04-bindings/src/pages/Home.vue`.

- Use the structure from `apps/04-bindings/_static/home.html` as the template reference.
- Copy the styles from `apps/04-bindings/_static/home.css` into a scoped style block.

3. In `Home.vue`, prepare the data to bind:

- Import `ref` and `h` from `vue`
- Import icons from `@ant-design/icons-vue`
- Import `PEOPLE` from `apps/04-bindings/src/data/people.ts`
- Create a `person` ref initialized with the first entry of `PEOPLE`

4. Bind the card content to the `person` data:

- Title: `firstname + ' ' + lastname`
- Description: `entity`
- Avatar `src`: `person.photo`
- Address line: `person.address.street`, `person.address.postalCode`, `person.address.city`
- Email line: `person.email`
- Phone line: `person.phone`

5. Add the actions and icons:

- Use the `<template #actions>` slot of `<a-card>`
- Bind icon props using `:icon="h(EditOutlined)"` and `:icon="h(DeleteOutlined)"`
- Use `<BankOutlined />`, `<MailOutlined />`, and `<PhoneOutlined />` in the info lines

6. Update `apps/04-bindings/src/App.vue` to render the new Home page under the header.

## Expected result

You should see a centered card showing the first person’s avatar, name, entity, address, email, and phone, with
edit/delete actions and icons aligned like the static example.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 04-bindings-solution
```

You can also inspect the reference code in `apps/04-bindings-solution`.
