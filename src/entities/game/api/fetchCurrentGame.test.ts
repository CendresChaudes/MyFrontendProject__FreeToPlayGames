import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '@/shared/api';
import * as storageLibs from '@/shared/lib/storage';
import { createMockStore } from '@/shared/tests';
import { createAdaptedMockCurrentGame } from '../tests/lib/createAdaptedMockCurrentGame';
import { fetchCurrentGame } from './fetchCurrentGame';
import { APIRoute } from '@/const';

jest.mock('@/shared/lib/storage');

jest.mock('./adaptCurrentGameFromAPI', () => ({
  adaptCurrentGameFromAPI: (item: CurrentGameAdaptedType) => item,
}));

describe('Async action: fetchCurrentGame', () => {
  const api = createAPI();
  const mockAPIAdapter = new MockAdapter(api);
  const mockStore = createMockStore({ game: { currentGame: null } }, api);

  const mockCurrentGame = createAdaptedMockCurrentGame();
  const mockParams: FetchCurrentGameType = { id: 1 };

  const mockExpiredCacheData = {
    data: mockCurrentGame,
    cacheExpireTime: Date.now() - 10000000,
  };

  const mockNotExpiredCacheData = {
    data: mockCurrentGame,
    cacheExpireTime: Date.now() + 10000000,
  };

  const getItemFromCache = storageLibs.getItemFromCache as jest.Mock;
  const removeItemFromCache = storageLibs.removeItemFromCache as jest.Mock;
  const setItemToCache = storageLibs.setItemToCache as jest.Mock;

  beforeEach(() => {
    getItemFromCache.mockClear();
    removeItemFromCache.mockClear();
    setItemToCache.mockClear();
    mockAPIAdapter.history.get = [];
  });

  test('Should return a current game data from fetch if an item does not exist', async () => {
    getItemFromCache.mockReturnValue(undefined);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGame);

    const currentGameFetchData = await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(currentGameFetchData.payload).toEqual(mockCurrentGame);
    expect(mockAPIAdapter.history.get.length).toBe(1);
  });

  test('Should return a current game data from fetch if an item exists and cache time has expired', async () => {
    getItemFromCache.mockReturnValue(mockExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGame);

    const currentGameFetchData = await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(currentGameFetchData.payload).toEqual(mockCurrentGame);
    expect(mockAPIAdapter.history.get.length).toBe(1);
  });

  test('Should return a current game data from cache if an item exists and cache time has not expired', async () => {
    getItemFromCache.mockReturnValue(mockNotExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGame);

    const currentGameFetchData = await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(currentGameFetchData.payload).toEqual(mockCurrentGame);
    expect(mockAPIAdapter.history.get.length).toBe(0);
  });

  test('should call "getItemFromCache" once', async () => {
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGame);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(getItemFromCache).toBeCalledTimes(1);
  });

  test('should not call "removeItemFromCache" if an item does not exist', async () => {
    getItemFromCache.mockReturnValue(undefined);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGame);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(removeItemFromCache).not.toBeCalled();
  });

  test('should not call "removeItemFromCache" if an item exists and cache time has not expired', async () => {
    getItemFromCache.mockReturnValue(mockNotExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGame);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(removeItemFromCache).not.toBeCalled();
  });

  test('should call "removeItemFromCache" once if an item exists and cache time has expired', async () => {
    getItemFromCache.mockReturnValue(mockExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGame);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(removeItemFromCache).toBeCalledTimes(1);
  });

  test('should call "setItemToCache" once if an item does not exist', async () => {
    getItemFromCache.mockReturnValue(undefined);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGame);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(setItemToCache).toBeCalledTimes(1);
  });

  test('should call "setItemToCache" once if an item exists and cache time has expired', async () => {
    getItemFromCache.mockReturnValue(mockExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGame);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(setItemToCache).toBeCalledTimes(1);
  });

  test('should not call "setItemToCache" if an item exists and cache time has not expired', async () => {
    getItemFromCache.mockReturnValue(mockNotExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGame);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(setItemToCache).not.toBeCalled();
  });
});
