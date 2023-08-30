import { isDataItemEmpty } from './isDataItemEmpty';

describe('Function: isDataItemEmpty', () => {
  test('should return item when item exist', () => {
    const dataItem = 123;
    const expectedResult = dataItem;

    expect(isDataItemEmpty(dataItem)).toBe(expectedResult);
  });

  test('should return "N/A" when item is not exist', () => {
    const dataItem = false;
    const expectedResult = 'N/A';

    expect(isDataItemEmpty(dataItem)).toBe(expectedResult);
  });

  test('should return "N/A" when item content is "?"', () => {
    const dataItem = '?';
    const expectedResult = 'N/A';

    expect(isDataItemEmpty<string>(dataItem)).toBe(expectedResult);
  });
});

