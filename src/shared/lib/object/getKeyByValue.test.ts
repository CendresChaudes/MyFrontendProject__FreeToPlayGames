// export const getKeyByValue = <T extends object>(object: T, value: T[keyof T]): keyof T | undefined =>
// getObjectKeys(object).find((key) => object[key] === value) ;

import { getKeyByValue } from './getKeyByValue';

describe('Function: getKeyByValue', () => {
  const mockObject = {
    a: 123,
    b: '123',
    c: [1, 2, 3]
  };

  test('Should return an object key by value if a key with this value exists', () => {
    const value = mockObject.b;

    const result = getKeyByValue(mockObject, value);
    const expectedResult = 'b';

    expect(result).toEqual(expectedResult);
  });

  test('Should return "undefined" if a key with this value does not exist', () => {
    const value = 'any data';

    const result = getKeyByValue(mockObject, value);
    const expectedResult = undefined;

    expect(result).toEqual(expectedResult);
  });
});


