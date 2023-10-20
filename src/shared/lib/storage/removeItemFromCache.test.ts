import { removeItemFromCache } from './removeItemFromCache';

describe('Function: removeItemFromCache', () => {
  Storage.prototype.removeItem = jest.fn();

  test('Should call "localStorage.removeItem" with correct key', () => {
    const mockKey = 'mockKey';

    removeItemFromCache(mockKey);

    expect(localStorage.removeItem).toHaveBeenCalledWith(mockKey);
  });
});
