# 05 - Events

## Goal

Handle user events in a Vue component by reacting to a button click to change the displayed person.

## What you will learn

- How to bind DOM events with `@click`
- How to create and use methods in `<script setup>`
- How to update reactive state with `ref`

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 05-events
```

2. Open `apps/05-events/src/pages/Home.vue` and add a function that selects a new person from the `PEOPLE` array.

- Keep the current `person` as a `ref`
- Pick a random person using `Math.random()`
- Assign the new person to `person.value`

3. Bind the click event to the delete action button:

- Find the delete button (`DeleteOutlined` icon)
- Add an `@click` handler that calls your function

4. Save and verify the UI updates when clicking the delete button.

## Expected result

When you click the delete icon, the displayed person (name, entity, photo, and contact info) changes to another entry.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 05-events-solution
```

You can also inspect the reference code in `apps/05-events-solution`.
