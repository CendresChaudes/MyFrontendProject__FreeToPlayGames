import { capitalizeWord } from './capitalizeWord';

describe('Function: capitalizeWord', () => {
  test('Should capitalize a word with more one letter', () => {
    const mockString = 'word';

    const result = capitalizeWord(mockString);
    const expectedResult = 'Word';

    expect(result).toBe(expectedResult);
  });

  test('Should capitalize a word with one letter', () => {
    const mockString = 'w';

    const result = capitalizeWord(mockString);
    const expectedResult = 'W';

    expect(result).toBe(expectedResult);
  });
});

