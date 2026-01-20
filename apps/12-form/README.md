# 12 - Form

## Goal

Build a reusable form inside a modal to create a new person from the People page.

## What you will learn

- How to model a reduced form type from an existing domain type
- How to build a controlled form with `reactive` and `v-model`
- How to communicate between child and parent components with custom events
- How to create a person through the service/composable layer

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 12-form
```

2. Create a dedicated form model type.

- In `apps/12-form/src/model/person.ts`, add a `PersonForm` type based on `Person`.
- Keep only the fields needed by the creation form (`id`, `photo`, `firstname`, `lastname`, `email`, `phone`).

3. Create the form model and service API.

- In `apps/12-form/src/model/person.ts`, add a `PersonForm` type based on `Person`.
- Keep only the fields needed by the creation form (`id`, `photo`, `firstname`, `lastname`, `email`, `phone`).
- In `apps/12-form/src/services/people.ts`, add a `postPerson(person: PersonForm)` method that performs a `POST` on `/peoples`.
- In `apps/12-form/src/composable/people.composable.ts`, expose a `createPerson(person: PersonForm)` method that calls `postPerson` and refreshes the list.

4. Create the Form component.

- Add `apps/12-form/src/components/Form/Form.vue`.
- In script setup, create a `reactive<PersonForm>` object with default values (including a default avatar URL).
- Expose a `close` event:
  - `close()` when the user clicks Cancel
  - `close(personForm)` when the user clicks Save
- Build the template with Ant Design Vue components:
  - `a-avatar` for the preview image
  - `a-form` and `a-form-item`
  - `a-input` fields for firstname, lastname, email, and phone
  - action buttons `Cancel` and `Save`
- Reuse the provided scaffold in `apps/12-form/_static/form.html` and `apps/12-form/_static/form.css`.

5. Open the form from the People page and handle creation.

- In `apps/12-form/src/pages/People/People.vue`, add a local `isModalOpen` ref.
- Add a click handler on the floating button to set `isModalOpen` to `true`.
- Render an `a-modal` bound with `v-model:open="isModalOpen"` and place `<Form />` inside.
- Listen to the form `close` event from the parent page:
  - close the modal when Cancel is clicked
  - call `createPerson` then close the modal when Save is clicked

## Expected result

- The People page still shows the list of cards.
- Clicking the floating “plus” button opens a modal titled “Add a new person”.
- The modal displays the form with avatar preview and editable fields.
- Clicking Cancel closes the modal.
- Clicking Save creates a person through the composable/service flow, then closes the modal.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 12-form-solution
```

You can also inspect the reference code in `apps/12-form-solution`.
