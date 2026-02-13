/* eslint-disable vue/one-component-per-file */
import { createApp, type InjectionKey } from 'vue';
import { getInjection, injectionMap, injectToken, PEOPLE_SERVICE_TOKEN } from './token-injection';

describe('token injection helpers', () => {
  it('returns a registered dependency from the injection map', () => {
    expect(getInjection(PEOPLE_SERVICE_TOKEN)).toBe(injectionMap.get(PEOPLE_SERVICE_TOKEN));
  });

  it('throws when trying to resolve an unknown token from the injection map', () => {
    const unknownToken = Symbol('UNKNOWN_TOKEN') as InjectionKey<string>;

    expect(() => getInjection(unknownToken)).toThrow('Injection not found for token Symbol(UNKNOWN_TOKEN)');
  });

  it('returns provided dependency from app injection context', () => {
    const token = Symbol('LOCAL_TOKEN') as InjectionKey<{ label: string }>;
    const dependency = { label: 'local-dependency' };
    const app = createApp({ render: () => null });

    app.provide(token, dependency);

    const result = app.runWithContext(() => injectToken(token));

    expect(result).toBe(dependency);
  });

  it('throws when token is not provided in app injection context', () => {
    const token = Symbol('MISSING_IN_CONTEXT') as InjectionKey<{ label: string }>;
    const app = createApp({ render: () => null });

    expect(() => app.runWithContext(() => injectToken(token))).toThrow('Injection not found for token Symbol(MISSING_IN_CONTEXT)');
  });
});
