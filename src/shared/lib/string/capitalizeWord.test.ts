import { capitalizeWord } from './capitalizeWord';

describe('Function: capitalizeWord', () => {
  test('should capitalize a word with more one letter', () => {
    const string = 'word';
    const expectedResult = 'Word';

    expect(capitalizeWord(string)).toBe(expectedResult);
  });

  test('should capitalize a word with one letter', () => {
    const string = 'w';
    const expectedResult = 'W';

    expect(capitalizeWord(string)).toBe(expectedResult);
  });
});

