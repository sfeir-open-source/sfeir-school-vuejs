import { localize } from '@vee-validate/i18n';
import { min, regex, required } from '@vee-validate/rules';
import { configure, defineRule } from 'vee-validate';

defineRule('required', required);
defineRule('min', min);
defineRule('regex', regex);
defineRule('sfeirEmail', (value: string) => {
  const sfeirEmailRegex = /^\w+.\w@sfeir.com$/;
  return sfeirEmailRegex.test(value);
});

configure({
  validateOnBlur: true,
  validateOnInput: true,
  validateOnModelUpdate: true,
  validateOnChange: true,
  generateMessage: localize('en', {
    messages: {
      required: 'The {field} is required',
      min: 'The {field} must be 0:{min} characters minimum',
      max: 'The {field} must be less than 0:{max} characters maximum',
    },
  }),
});
