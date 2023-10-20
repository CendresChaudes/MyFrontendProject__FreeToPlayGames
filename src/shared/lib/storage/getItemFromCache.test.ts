import { getItemFromCache } from './getItemFromCache';

describe('Function: getItemFromCache', () => {
  test('Should call "localStorage.getItem" with existing key and return parsed data', () => {
    const mockKey = 'existingKey';
    const mockData = { data: 'some data' };
    Storage.prototype.getItem = jest.fn().mockReturnValue(JSON.stringify(mockData));

    const retrievedData = getItemFromCache(mockKey);

    expect(localStorage.getItem).toHaveBeenCalledWith(mockKey);
    expect(retrievedData).toEqual(mockData);
  });

  test('Should call "localStorage.getItem" with nonexisting key and return "null"', () => {
    const mockKey = 'nonexistingKey';
    Storage.prototype.getItem = jest.fn().mockReturnValue(null);

    const retrievedData = getItemFromCache(mockKey);

    expect(localStorage.getItem).toHaveBeenCalledWith(mockKey);
    expect(retrievedData).toBeNull();
  });
});
