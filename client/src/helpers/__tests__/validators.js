import { isUrl, isEmail, isValidPassword } from '../validators';

describe('isUrl()', () => {
  test('string is an url', () => {
    const url = 'https://www.example.com/foo/?bar=baz&inga=42&quux';
    const actual = isUrl(url);
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('empty string is not an url', () => {
    const url = '    ';
    const actual = isUrl(url);
    const expected = false;

    expect(actual).toBe(expected);
  });

  test('string is not an url', () => {
    const url = 'http s://www.example.com/foo/?bar=baz&inga=42&quux';
    const actual = isUrl(url);
    const expected = false;

    expect(actual).toBe(expected);
  });
});

describe('isEmail()', () => {
  test('string is an email', () => {
    const str = 'aaa@aaa.aa';
    const actual = isEmail(str);
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('empty string is not an email', () => {
    const str = '    ';
    const actual = isEmail(str);
    const expected = false;

    expect(actual).toBe(expected);
  });

  test('string is not an email', () => {
    const str = '@.';
    const actual = isEmail(str);
    const expected = false;

    expect(actual).toBe(expected);
  });
});

describe('isValidPassword()', () => {
  test('string is valid password', () => {
    const str = 'aaa@aaa.aa';
    const actual = isValidPassword(str);
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('empty string is not a valid password', () => {
    const str = '    ';
    const actual = isValidPassword(str);
    const expected = false;

    expect(actual).toBe(expected);
  });

  test('short string is not a valid password', () => {
    const str = '111';
    const actual = isValidPassword(str);
    const expected = false;

    expect(actual).toEqual(expected);
  });
});
