import { capitalizeWord } from './capitalizeWord';

describe('Function: capitalizeWord', () => {
  test('Should capitalize a word with more one letter', () => {
    const mockString = 'word';
    const expectedResult = 'Word';

    const result = capitalizeWord(mockString);

    expect(result).toBe(expectedResult);
  });

  test('Should capitalize a word with one letter', () => {
    const mockString = 'w';
    const expectedResult = 'W';

    const result = capitalizeWord(mockString);

    expect(result).toBe(expectedResult);
  });
});

