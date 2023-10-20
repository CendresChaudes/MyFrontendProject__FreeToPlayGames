import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { createAPI } from '@/shared/api';
import * as storageLibs from '@/shared/lib/storage';
import { createAdaptedMockCurrentGameData } from '../tests-lib/createAdaptedMockCurrentGameData';
import { fetchCurrentGame } from './fetchCurrentGame';
import { APIRoute } from '@/const';

jest.mock('@/shared/lib/storage');

jest.mock('./adaptCurrentGameFromAPI', () => ({
  adaptCurrentGameFromAPI: (item: GameAdaptedType) => item,
}));

type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

describe('Async action: fetchCurrentGame', () => {
  const api = createAPI();
  const mockAPIAdapter = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middlewares);
  const mockStore: ReturnType<typeof mockStoreCreator> = mockStoreCreator({ game: { games: [] } });

  const mockCurrentGameData = createAdaptedMockCurrentGameData();
  const mockParams: FetchCurrentGameData = { id: 1 };

  const mockExpiredCacheData = {
    data: mockCurrentGameData,
    cacheExpireTime: Date.now() - 10000000,
  };

  const mockNotExpiredCacheData = {
    data: mockCurrentGameData,
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
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGameData);

    const currentGameFetchData = await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(currentGameFetchData.payload).toEqual(mockCurrentGameData);
    expect(mockAPIAdapter.history.get.length).toBe(1);
  });

  test('Should return a current game data from fetch if an item exists and cache time has expired', async () => {
    getItemFromCache.mockReturnValue(mockExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGameData);

    const currentGameFetchData = await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(currentGameFetchData.payload).toEqual(mockCurrentGameData);
    expect(mockAPIAdapter.history.get.length).toBe(1);
  });

  test('Should return a current game data from cache if an item exists and cache time has not expired', async () => {
    getItemFromCache.mockReturnValue(mockNotExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGameData);

    const currentGameFetchData = await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(currentGameFetchData.payload).toEqual(mockCurrentGameData);
    expect(mockAPIAdapter.history.get.length).toBe(0);
  });

  test('should call "getItemFromCache" once', async () => {
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGameData);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(getItemFromCache).toBeCalledTimes(1);
  });

  test('should not call "removeItemFromCache" if an item does not exist', async () => {
    getItemFromCache.mockReturnValue(undefined);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGameData);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(removeItemFromCache).not.toBeCalled();
  });

  test('should not call "removeItemFromCache" if an item exists and cache time has not expired', async () => {
    getItemFromCache.mockReturnValue(mockNotExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGameData);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(removeItemFromCache).not.toBeCalled();
  });

  test('should call "removeItemFromCache" once if an item exists and cache time has expired', async () => {
    getItemFromCache.mockReturnValue(mockExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGameData);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(removeItemFromCache).toBeCalledTimes(1);
  });

  test('should call "setItemToCache" once if an item does not exist', async () => {
    getItemFromCache.mockReturnValue(undefined);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGameData);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(setItemToCache).toBeCalledTimes(1);
  });

  test('should call "setItemToCache" once if an item exists and cache time has expired', async () => {
    getItemFromCache.mockReturnValue(mockExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGameData);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(setItemToCache).toBeCalledTimes(1);
  });

  test('should not call "setItemToCache" if an item exists and cache time has not expired', async () => {
    getItemFromCache.mockReturnValue(mockNotExpiredCacheData);
    mockAPIAdapter.onGet(APIRoute.Game).reply(200, mockCurrentGameData);

    await mockStore.dispatch(fetchCurrentGame(mockParams));

    expect(setItemToCache).not.toBeCalled();
  });
});
