# 14 - Form Composable

## Goal

Extract form state logic into a dedicated composable so the `Form` component stays focused on UI and events.

## What you will learn

- How to move component state logic into a Vue composable
- How to expose reactive state from a composable with `toRef`
- How to synchronize form state from external data using `watch`
- How to keep component behavior unchanged while refactoring internals

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 14-form-composable
```

2. Create a form composable.

- Add `apps/14-form-composable/src/composable/people.form.composable.ts`.
- Implement `usePeopleForm(person: () => Person)`.
- Inside the composable:
  - create a `reactive<PersonForm>` with default values
  - use `watch` on `person` to sync incoming person data to the form model
  - return the form model as `personForm: toRef(personForm)`

3. Refactor the Form component to use the composable.

- Update `apps/14-form-composable/src/components/Form/Form.vue`.
- Remove local `reactive` + `watch` logic from the component.
- Import and use `usePeopleForm(() => person)` to obtain `personForm`.
- Keep the existing template and `close` event contract unchanged:
  - `close()` for cancel
  - `close(personForm)` for save

4. Verify existing create and update flows.

- Check `People` page (create modal) still behaves as before.
- Check `Details` page still pre-fills fields and updates correctly.

## Expected result

- Form logic initialization/synchronization is centralized in `usePeopleForm`.
- `Form.vue` remains a presentational component that emits close events.
- Create and update flows still work exactly like before.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 14-form-composable-solution
```

You can also inspect the reference code in `apps/14-form-composable-solution`.
