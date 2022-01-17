export class CustomPersonValidators {
  static sfeirEmailValidator(value) {
    const sfeirEmailPattern = /^\w+.\w@sfeir.com$/;
    return sfeirEmailPattern.test(value);
  }

  static phoneFormat(format) {
    return value => format.test(value);
  }
}
