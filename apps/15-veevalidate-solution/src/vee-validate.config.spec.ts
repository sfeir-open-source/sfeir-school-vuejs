import { validate } from 'vee-validate';

describe('vee-validate.config', () => {
  it('accepts a valid sfeir email', async () => {
    const result = await validate('ada.l@sfeir.com', 'sfeirEmail');

    expect(result.valid).toBe(true);
  });

  it('rejects a non-sfeir email', async () => {
    const result = await validate('ada@example.test', 'sfeirEmail');

    expect(result.valid).toBe(false);
  });
});
