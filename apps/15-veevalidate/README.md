# 15 - VeeValidate

## Goal

Integrate `vee-validate` into the existing person form so the user can only save valid data.

## What you will learn

- How to use `VeeForm` and `Field` from `vee-validate`
- How to configure validation rules globally
- How to apply built-in rules such as `required` and `min`
- How to create and use a custom rule (`sfeirEmail`)
- How to drive UI state from form validity (disable save when invalid)

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 15-veevalidate
```

2. Add vee-validate configuration.

- Create `apps/15-veevalidate/src/vee-validate.config.ts`.
- Register rules with `defineRule`:
  - `required`
  - `min`
  - a custom `sfeirEmail` rule that accepts emails from `sfeir.com`
- Add `configure(...)` to define validation behavior and messages.
- Import this configuration file in `apps/15-veevalidate/src/main.ts`.

3. Refactor the form to use vee-validate.

- Update `apps/15-veevalidate/src/components/Form/Form.vue`.
- Wrap the form with `VeeForm` and use its `meta.valid` slot state.
- Replace plain inputs with `Field` wrappers and attach rules:
  - `firstname`: `required|min:2`
  - `lastname`: `required|min:2`
  - `email`: `required|sfeirEmail`
  - `phone`: `required|min:10`
- Display validation status/errors in each `a-form-item`.
- Keep the existing `close` event API unchanged.

4. Prevent invalid submissions.

- Keep `Cancel` behavior as is.
- Disable the `Save` button while the form is invalid.
- Emit the form payload only when the user clicks `Save` on a valid form.

5. Verify behavior manually.

- Open `People` and `Details` pages.
- Confirm invalid data shows errors and cannot be submitted.
- Confirm valid data enables `Save` and keeps create/update flows working.

## Expected result

- The form validates each field in real time.
- Validation errors are visible in the UI.
- The save action is blocked until all fields are valid.
- Existing create and update flows still work with validated data.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 15-veevalidate-solution
```

You can also inspect the reference code in `apps/15-veevalidate-solution`.
