# 09 - Loop

## Goal

Render a list of people by looping over data and showing a card for each person.

## What you will learn

- How to render lists with `v-for` and stable keys
- How to fetch data on mount using a composable
- How to structure a page that displays repeated UI blocks

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 09-loop
```

2. Create a People page that will display the list of people.

- Create a component in `apps/09-loop/src/pages/People/People.vue`.
- Use the `usePeople` composable to access `people` and `getPeople`.
- Call `getPeople` when the page mounts.

3. Render one card per person.

- Use `v-for` to loop over the `people` array.
- Provide a stable `:key` (use the person id).
- Display the avatar, full name, entity, address, email, and phone.

4. Wire the route and navigation.

- Add a `/people` route in `apps/09-loop/src/router/index.ts`.
- Update the header in `apps/09-loop/src/App.vue` to navigate to `/home` and `/people` (use `RouterLink` and buttons).

## Expected result

You can navigate to the People page and see a grid of cards, one per person, with their contact details.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 09-loop-solution
```

You can also inspect the reference code in `apps/09-loop-solution`.
