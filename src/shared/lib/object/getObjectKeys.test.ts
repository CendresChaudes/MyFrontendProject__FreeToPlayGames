import { getObjectKeys } from './getObjectKeys';

describe('Function: getObjectKeys', () => {
  test('should return array of object keys', () => {
    const object = {
      a: 123,
      b: '123',
      c: [1, 2, 3]
    };

    const expectedResult = ['a', 'b', 'c'];

    expect(getObjectKeys(object)).toEqual(expectedResult);
  });

  test('should return empty array', () => {
    const object = {};
    const expectedResult: [] = [];

    expect(getObjectKeys(object)).toEqual(expectedResult);
  });
});


