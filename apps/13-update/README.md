# 13 - Update

## Goal

Add an edit flow to update an existing person from the People list.

## What you will learn

- How to add a details route with route params in Vue Router
- How to navigate programmatically from a card action
- How to reuse one form for both create and update use cases
- How to load a person by id and persist updates through service/composable

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 13-update
```

2. Add the details route for person edition.

- Create `apps/13-update/src/pages/Details/Details.vue`.
- Update `apps/13-update/src/router/index.ts` with a new route:
  - path: `/people/:id`
  - name: `details`
  - props: `true`

3. Make card edit action navigate to details.

- In `apps/13-update/src/components/Card/Card.vue`, inject `useRouter`.
- Add a `goToDetails(id: string)` function.
- Wire the edit action button to navigate with:
  - route name `details`
  - params `{ id }`

4. Extend the service and composable for update use cases.

- In `apps/13-update/src/services/people.ts`, add:
  - `getPersonById(id: string)`
  - `putPerson(person: PersonForm)`
- In `apps/13-update/src/composable/people.composable.ts`, expose:
  - `getPersonDetails(id: string)`
  - `updatePerson(person: PersonForm)` and refresh the list after update

5. Reuse the existing Form component in edit mode.

- In `apps/13-update/src/components/Form/Form.vue`, accept an optional `person` prop.
- Keep a local `personForm` reactive object and sync it when `person` changes (using `watch`).
- Keep the existing `close` event contract:
  - `close()` for cancel
  - `close(personForm)` for save

6. Implement the `Details` page behavior.

- In `apps/13-update/src/pages/Details/Details.vue`:
  - read the `id` prop from the route
  - load person details each time the id prop changes with `getPersonDetails`
  - render `<Form :person="person" @close="editPerson" />`
  - when form emits without payload: navigate back to people
  - when form emits payload: call `updatePerson`, then navigate back to people

7. Validate the full flow.

- Open the People page.
- Click edit on one person card.
- Change form values and save.
- Return to People and confirm data was updated.

## Expected result

- Clicking edit on a person card opens a details page for that person.
- The form is prefilled with the selected person data.
- Clicking Cancel returns to the People page without update.
- Clicking Save updates the person then returns to the People page.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 13-update-solution
```

You can also inspect the reference code in `apps/13-update-solution`.
