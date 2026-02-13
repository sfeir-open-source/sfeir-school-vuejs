import { type InjectionKey, inject } from 'vue';
import { PeopleService } from './services/people';

export const PEOPLE_SERVICE_TOKEN: InjectionKey<PeopleService> = Symbol('PEOPLE_SERVICE_TOKEN');
export const injectionMap = new Map<InjectionKey<unknown>, unknown>([[PEOPLE_SERVICE_TOKEN, new PeopleService()]]);

export function getInjection<T>(token: InjectionKey<T>): T {
  const dependency = injectionMap.get(token);

  if (dependency === undefined) {
    throw new Error(`Injection not found for token ${String(token)}`);
  }

  return dependency as T;
}

export function injectToken<T>(token: InjectionKey<T>): T {
  const dependency = inject(token);
  if (!dependency) {
    throw new Error(`Injection not found for token ${String(token)}`);
  }
  return dependency;
}
