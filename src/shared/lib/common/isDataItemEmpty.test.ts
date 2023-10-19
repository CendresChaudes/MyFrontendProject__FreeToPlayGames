import { isDataItemEmpty } from './isDataItemEmpty';

describe('Function: isDataItemEmpty', () => {
  test('Should return an item value when it exists (not null or undefined)', () => {
    const mockItemValue = 123;
    const expectedResult = 123;

    const result = isDataItemEmpty(mockItemValue);

    expect(result).toBe(expectedResult);
  });

  test('Should return "N/A" when an item value is not exist (null or undefined)', () => {
    const mockItemValue = undefined;
    const expectedResult = 'N/A';

    const result = isDataItemEmpty(mockItemValue);

    expect(result).toBe(expectedResult);
  });

  test('Should return "N/A" when item content is "?"', () => {
    const mockItemValue = '?';
    const expectedResult = 'N/A';

    const result = isDataItemEmpty<string>(mockItemValue);

    expect(result).toBe(expectedResult);
  });
});

