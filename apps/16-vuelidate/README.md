# 16 - Vuelidate

## Goal

Integrate `@vuelidate/core` and `@vuelidate/validators` into the person form so users can only save valid data.

## What you will learn

- How to declare validation rules in a composable with `useVuelidate`
- How to use Vuelidate field state (`$model`, `$error`, `$errors`, `$touch`)
- How to build a custom validator for SFEIR emails
- How to bind validation state to Ant Design Vue form feedback
- How to disable submit while the form is invalid

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 16-vuelidate
```

2. Add Vuelidate dependencies.

- Install `@vuelidate/core` and `@vuelidate/validators` in this project.
- Keep the existing app structure and form API unchanged.

3. Implement validation in the form composable.

- Update `apps/16-vuelidate/src/composable/people.form.composable.ts`.
- Keep the existing reactive `personForm` model.
- Create rules for:
  - `firstname`: `required` + minimum length of 2
  - `lastname`: `required` + minimum length of 2
  - `email`: `required` + custom SFEIR domain validator
  - `phone`: `required` + minimum length of 10
- Expose both `personForm` and `v$` from the composable.
- Keep synchronization with the incoming `person` prop.

4. Connect Vuelidate to the form component.

- Update `apps/16-vuelidate/src/components/Form/Form.vue`.
- Bind each input to `v$.<field>.$model`.
- Mark fields as touched on blur using `$touch`.
- Display feedback/error message using:
  - `validate-status` based on touched/dirty/error state
  - `help` with the first message from `$errors`

5. Control the Save action with validation state.

- Keep `Cancel` behavior unchanged.
- Disable `Save` while the form is invalid (`v$.$invalid`).
- Emit the form payload only when the user clicks `Save` on a valid form.

## Expected result

- Invalid values show validation errors in the form.
- The custom SFEIR email rule rejects non-`@sfeir.com` emails.
- The Save button stays disabled until all required data is valid.
- Create/update flows still work with validated form data.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 16-vuelidate-solution
```

You can also inspect the reference code in `apps/16-vuelidate-solution`.
