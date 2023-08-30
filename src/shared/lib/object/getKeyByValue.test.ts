// export const getKeyByValue = <T extends object>(object: T, value: T[keyof T]): keyof T | undefined =>
// getObjectKeys(object).find((key) => object[key] === value) ;

import { getKeyByValue } from './getKeyByValue';

describe('Function: getKeyByValue', () => {
  test('should return object key by value if key with this value is exist', () => {
    const object = {
      a: 123,
      b: '123',
      c: [1, 2, 3]
    };

    const value = '123';
    const expectedResult = 'b';

    expect(getKeyByValue(object, value)).toEqual(expectedResult);
  });

  test('should return "undefined" if key with this value is not exist', () => {
    const object = {
      a: 123,
      b: '123',
      c: [1, 2, 3]
    };

    const value = 'any data';
    const expectedResult = undefined;

    expect(getKeyByValue(object, value)).toEqual(expectedResult);
  });
});


