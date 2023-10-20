import { setItemToCache } from './setItemToCache';

describe('Function: setItemToCache', () => {
  Storage.prototype.setItem = jest.fn();

  const mockKey = 'mockKey';
  const mockData = { data: 'some data' };

  test('Should call "localStorage.setItem" with correct key and data without cache time', () => {
    setItemToCache(mockKey, mockData);

    expect(localStorage.setItem).toHaveBeenCalledWith(mockKey, JSON.stringify({ data: mockData, cacheExpireTime: undefined }));
  });

  test('Should call "localStorage.setItem" with correct key, data and cache time', () => {
    const mockCacheTime = 5000;
    const cacheExpireTime = Date.now() + mockCacheTime;

    setItemToCache(mockKey, mockData, mockCacheTime);

    expect(localStorage.setItem).toHaveBeenCalledWith(mockKey, JSON.stringify({ data: mockData, cacheExpireTime }));
  });
});
