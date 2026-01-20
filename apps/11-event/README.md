# 11 - Event

## Goal

Add custom events to the Card component so parent pages can react to user actions (randomizing on Home and deleting on People).

## What you will learn

- How to declare and emit custom events with `defineEmits`
- How to listen to child component events in parent templates
- How to wire event handlers to service/composable actions

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 11-event
```

2. Emit a delete event from the Card component.

- In `apps/11-event/src/components/Card/Card.vue`, declare `defineEmits` with an `onDeletePerson` event that carries the `Person`.
- When the delete button is clicked, emit the event with the current `person`.

3. React to the delete event on Home.

- In `apps/11-event/src/pages/Home/Home.vue`, get `getRandomPerson` from `usePeople`.
- Add a handler that awaits `getRandomPerson` and assigns the result to `person`.
- Listen to the Card event using `@on-delete-person` and call the handler.

4. Add deletion support to the People flow.

- In `apps/11-event/src/services/people.ts`, add a `deletePerson(id: string)` method that calls `DELETE /peoples/:id`.
- In `apps/11-event/src/composable/people.composable.ts`, expose a `deletePerson` function that updates `people` from the service response.
- In `apps/11-event/src/pages/People/People.vue`, listen to `@on-delete-person` and call `deletePerson` with the person id.

## Expected result

- Clicking the delete icon on the Home card loads and displays a new random person.
- Clicking the delete icon on a People card removes that person from the list.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 11-event-solution
```

You can also inspect the reference code in `apps/11-event-solution`.
