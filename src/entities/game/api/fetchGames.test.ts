import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { createAPI } from '@/shared/api';
import { Platform, Genre, SortType } from '../const';
import { createAdaptedMockGamesData } from '../tests-lib/createAdaptedMockGamesData';
import { fetchGames } from './fetchGames';
import { APIRoute } from '@/const';

jest.mock('./adaptGamesFromAPI', () => ({
  adaptGamesFromAPI: (items: GamesAdaptedType[]) => items,
}));

type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

describe('Async action: fetchGames', () => {
  const api = createAPI();
  const mockAPIAdapter = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middlewares);
  const mockStore: ReturnType<typeof mockStoreCreator> = mockStoreCreator({ game: { games: [] } });

  test('Should return an array of games data', async () => {
    const mockGamesData = createAdaptedMockGamesData();

    const mockParams: FetchGamesData = {
      params: {
        platform: Platform.All,
        category: Genre.All,
        'sort-by': SortType.Relevance,
      },
    };

    mockAPIAdapter.onGet(APIRoute.Games).reply(200, mockGamesData);

    const gamesFetchData = await mockStore.dispatch(fetchGames(mockParams));

    expect(gamesFetchData.payload).toEqual(mockGamesData);
  });
});
