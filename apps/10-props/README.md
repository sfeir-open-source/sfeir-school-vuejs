# 10 - Props

## Goal

Extract a reusable card component that receives a person via props and reuse it across pages.

## What you will learn

- How to define and consume typed props in Vue
- How to reuse a component in multiple pages
- How to keep pages focused by delegating UI to child components

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 10-props
```

2. Create a reusable Card component.

- Create `apps/10-props/src/components/Card/Card.vue`.
- Define a `person` prop (use the `Person` type).
- Move the card markup from the People page into this component.

3. Update the Home page.

- In `apps/10-props/src/pages/Home/Home.vue`, render a single `<Card />`.
- Pass the selected person as a prop.

4. Update the People page.

- In `apps/10-props/src/pages/People/People.vue`, loop over `people` and render one `<Card />` per person.
- Provide a stable `:key` based on the person id.

## Expected result

Both Home and People pages display the same card layout, powered by a shared Card component.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 10-props-solution
```

You can also inspect the reference code in `apps/10-props-solution`.
