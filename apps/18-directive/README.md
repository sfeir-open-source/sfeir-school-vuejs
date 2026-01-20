# 18 - Directive

## Goal

Create and use a custom Vue directive to style manager information in person cards.

## What you will learn

- How to create a custom directive with the `mounted` hook
- How to read directive binding values
- How to apply DOM styling from a directive
- How to register and use a directive locally in a component

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 18-directive
```

2. Create the custom directive file.

- Add `apps/18-directive/src/directive/manager.ts`.
- Export a directive named `vManager`.
- In `mounted`, read the bound `person` value.
- If `person.isManager` is `false`, apply italic style on the host element.

3. Use the directive in the card component.

- Update `apps/18-directive/src/components/Card/Card.vue`.
- Import `vManager` in the `<script setup>`.
- Apply it to the manager text element:
  - use `v-manager="person"`
- Keep current card behaviors unchanged (navigation, delete, displayed data).

4. Verify behavior manually.

- For a person that is not a manager, manager text should be italic.
- For a manager, text should keep normal style.
- Ensure existing card actions still work.

## Expected result

- A `v-manager` custom directive exists and is used in the card.
- Manager text is italic for non-managers.
- Existing card behavior still works as before.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 18-directive-solution
```

You can also inspect the reference code in `apps/18-directive-solution`.
