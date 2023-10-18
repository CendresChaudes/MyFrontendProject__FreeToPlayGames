import { getObjectKeys } from './getObjectKeys';

describe('Function: getObjectKeys', () => {
  test('Should return an array of object keys', () => {
    const mockObject = {
      a: 123,
      b: '123',
      c: [1, 2, 3]
    };

    const result = getObjectKeys(mockObject);
    const expectedResult = ['a', 'b', 'c'];

    expect(result).toEqual(expectedResult);
  });

  test('Should return an empty array', () => {
    const mockObject = {};

    const result = getObjectKeys(mockObject);
    const expectedResult: [] = [];

    expect(result).toEqual(expectedResult);
  });
});


