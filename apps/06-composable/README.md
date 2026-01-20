# 06 - Composable

## Goal

Extract the people data logic into a reusable composable so the `Home` page only focuses on rendering.

## What you will learn

- How to create a Vue composable to share stateful logic
- How to expose reactive state from a composable
- How to initialize composable data on component mount

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 06-composable
```

2. Create a composable that manages the people list:

- Add `apps/06-composable/src/composable/people.composable.ts`
- Create a `usePeople` function that exposes:
  - a reactive `people` list
  - a `getPeople` function that fills the list with the `PEOPLE` dataset
  - a `getRandomPerson` function that returns a random person from the list

3. Update `apps/06-composable/src/pages/Home.vue` to use the composable:

- Replace the direct `PEOPLE` usage with `usePeople`
- On mount, load the people list and set the first person
- When clicking the delete action, pick a new random person from the composable

4. Make sure the template still renders correctly if the person is not yet set.

## Expected result

The page displays a person card from the dataset, and clicking the delete action picks another random person while keeping the UI unchanged.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 06-composable-solution
```

You can also inspect the reference code in `apps/06-composable-solution`.
