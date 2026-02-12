# 19 - Pinia

## Goal

Migrate the people state management from a shared composable to a Pinia store and wire the app to use this store in the pages.

## What you will learn

- How to create a Pinia store with `defineStore`
- How to expose state, computed values, and async actions from a store
- How to register Pinia in `main.ts`
- How to consume store state reactively with `storeToRefs`
- How to avoid reactivity issues when deriving local state from store data

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 19-pinia
```

2. Create a store in `apps/19-pinia/src/composable/people.store.ts`:

- Use `defineStore` with the setup syntax
- Move people-related logic from `people.composable.ts` into the store actions:
  `getPeople`, `getRandomPerson`, `deletePerson`, `createPerson`, `getPersonDetails`, `updatePerson`
- Add store state for `people` and `search`
- Add a computed value `filteredPeople` based on `people` and `search`

3. Register Pinia in `apps/19-pinia/src/main.ts`:

- Import `createPinia` from `pinia`
- Create the pinia instance
- Register it with `app.use(...)` before mounting

4. Update `apps/19-pinia/src/pages/Home/Home.vue`:

- Replace `usePeople()` with `usePeopleStore()`
- Use `storeToRefs` for reactive store state
- Keep the selected person in sync when `filteredPeople` changes

5. Update `apps/19-pinia/src/pages/People/People.vue` and `apps/19-pinia/src/pages/Details/Details.vue`:

- Replace composable usage with the Pinia store
- Keep the same behavior for listing, deleting, creating, and editing people

6. Run tests:

```bash
npx nx test 19-pinia
```

## Expected result

- The app uses a single Pinia store as the source of truth for people data
- Home page reacts correctly when the filtered list changes
- Main file registers Pinia and router before mounting the app
- Tests pass for `19-pinia`

## Need the solution?

Run the solution app:

```bash
npm start -- 19-pinia-solution
```

You can compare your code with `apps/19-pinia-solution`.
