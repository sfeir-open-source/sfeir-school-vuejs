# 21 - Injection

## Goal

Decouple the people store from a concrete service instance by using Vue dependency injection (`provide` / `inject`) with typed tokens.

## What you will learn

- How to define a typed injection token with `InjectionKey`
- How to centralize dependency registration and resolution
- How to provide dependencies at app bootstrap time
- How to consume an injected service inside a Pinia store

## Exercise steps

1. Run the exercise app:

```bash
npm start -- 21-injection
```

2. Create a new file `apps/21-injection/src/token-injection.ts`.

3. In this file, define a typed token for `PeopleService`:

- Use `InjectionKey<PeopleService>`
- Export a constant token named `PEOPLE_SERVICE_TOKEN`

4. Still in `token-injection.ts`, add a small dependency map and helper functions:

- Create a map that associates the token to a `new PeopleService()`
- Add a `getInjection(token)` helper that reads from the map and throws a clear error if the token is missing
- Add an `injectToken(token)` helper that uses Vue `inject` and throws if the dependency is not provided

5. Update `apps/21-injection/src/main.ts`:

- Import `PEOPLE_SERVICE_TOKEN` and `getInjection`
- Call `app.provide(...)` before `use(...)` / `mount(...)`
- Provide the token with `getInjection(PEOPLE_SERVICE_TOKEN)`

6. Update `apps/21-injection/src/composable/people.store.ts`:

- Remove direct instantiation of `PeopleService`
- Import `injectToken` and `PEOPLE_SERVICE_TOKEN`
- Resolve the service with `injectToken(PEOPLE_SERVICE_TOKEN)` and keep the existing store behavior

## Expected result

- The app behavior remains identical for users
- `PeopleStore` no longer creates `PeopleService` directly
- The service is injected through a typed token from app bootstrap
- Tests pass with the new injection-based wiring

## Need the solution?

Run the solution app:

```bash
npm start -- 21-injection-solution
```

You can compare your work with `apps/21-injection-solution`.
