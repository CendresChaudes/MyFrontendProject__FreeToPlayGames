import { isDataItemEmpty } from './isDataItemEmpty';

describe('Function: isDataItemEmpty', () => {
  test('Should return an item value when it exists (not null or undefined)', () => {
    const mockItemValue = 123;

    const result = isDataItemEmpty(mockItemValue);
    const expectedResult = 123;

    expect(result).toBe(expectedResult);
  });

  test('Should return "N/A" when an item value is not exist (null or undefined)', () => {
    const mockItemValue = undefined;

    const result = isDataItemEmpty(mockItemValue);
    const expectedResult = 'N/A';

    expect(result).toBe(expectedResult);
  });

  test('Should return "N/A" when item content is "?"', () => {
    const mockItemValue = '?';

    const result = isDataItemEmpty<string>(mockItemValue);
    const expectedResult = 'N/A';

    expect(result).toBe(expectedResult);
  });
});

