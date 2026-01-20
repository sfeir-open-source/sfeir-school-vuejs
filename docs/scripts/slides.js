import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/dist/sfeir-school-theme.mjs';
import { dayOneSlides } from './day-one.js';
import { dayTwoSlides } from './day-two.js';

function formation() {
  return [...dayOneSlides(), ...dayTwoSlides()].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
