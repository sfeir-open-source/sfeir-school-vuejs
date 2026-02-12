# 17 - Filter

## Goal

Use Vue computed values as display filters in the person card to transform data for rendering.

## What you will learn

- How to use `computed` as a filter-like transformation in Vue
- How to keep raw model data untouched while adapting displayed values
- How to add a safe fallback for missing values
- How to update a component template to use transformed data

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 17-filter
```

2. Open the card component.

- Work in `apps/17-filter/src/components/Card/Card.vue`.
- Keep the current behavior for edit/delete actions unchanged.

3. Add a display filter for the manager.

- Import `computed` from `vue`.
- Create a computed value that returns:
  - the manager name when available
  - `'N/A'` when the manager is empty or missing

4. Display the manager in the card content.

- Add a new line in the card details section for manager information.
- Reuse the existing visual style of other info lines.
- Use the computed value in the template instead of direct raw access.

5. Verify behavior manually.

- Check cards where manager is defined: the manager name should be shown.
- Check cards where manager is empty: `N/A` should be shown.
- Ensure existing navigation and delete actions still work.

## Expected result

- Person cards display a manager line.
- Manager value is transformed with a computed filter (`name` or `N/A`).
- Existing card interactions remain unchanged.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 17-filter-solution
```

You can also inspect the reference code in `apps/17-filter-solution`.
