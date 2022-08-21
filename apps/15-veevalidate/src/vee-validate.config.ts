import { localize } from '@vee-validate/i18n';
import { configure } from 'vee-validate';

configure({
  validateOnBlur: true,
  generateMessage: localize('en', {
    messages: {
      required: 'The {field} is required',
      min: 'The {field} must be 0:{min} characters minimum',
      max: 'The {field} must be less than 0:{max} characters maximum'
    }
  })
});
