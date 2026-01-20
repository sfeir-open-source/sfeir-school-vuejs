# 07 - HTTP

## Goal

Replace the static people dataset with real HTTP requests to the Express API, while keeping the UI unchanged.

## What you will learn

- How to call a REST API with Axios from a Vue app
- How to centralize HTTP calls in a service class
- How to make composables and components async-friendly
- How to use Vite environment variables (`import.meta.env`)

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 07-http
```

The API should be available at `http://localhost:9000/api`.

2. Add a base API URL for Vite:

- Create `apps/07-http/.env`
- Add:

```env
VITE_BASE_API = "http://localhost:9000/api"
```

3. Create an HTTP service:

- Add `apps/07-http/src/services/people.ts`
- Use Axios to implement:
  - `getPeople()` → `GET /peoples`
  - `getRandomPerson()` → `GET /peoples/random`
- Read the base URL from `import.meta.env.VITE_BASE_API`

4. Update the composable to use the service:

- Edit `apps/07-http/src/composable/people.composable.ts`
- Replace the static `PEOPLE` dataset with calls to the service
- Make `getPeople` and `getRandomPerson` async

5. Update the Home page to handle async data:

- Edit `apps/07-http/src/pages/Home.vue`
- `onMounted` should await `getPeople()` before selecting the first person
- `randomPerson` should await `getRandomPerson()`

6. (Optional) Add typing for the environment variable:

- Add `apps/07-http/src/env.d.ts` with the `VITE_BASE_API` definition

## Expected result

The page renders the first person returned by the API, and clicking the delete action loads a new random person from the server.

## Need the solution?

Run the solution app to compare your work:

```bash
npm start -- 07-http-solution
```

You can also inspect the reference code in `apps/07-http-solution`.
