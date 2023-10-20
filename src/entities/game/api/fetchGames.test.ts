import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '@/shared/api';
import { createMockStore } from '@/shared/tests';
import { Platform, Genre, SortType } from '../const';
import { createAdaptedMockGamesData } from '../tests/lib/createAdaptedMockGamesData';
import { fetchGames } from './fetchGames';
import { APIRoute } from '@/const';

jest.mock('./adaptGamesFromAPI', () => ({
  adaptGamesFromAPI: (items: GamesAdaptedType[]) => items,
}));

describe('Async action: fetchGames', () => {
  const api = createAPI();
  const mockAPIAdapter = new MockAdapter(api);
  const mockStore = createMockStore({ game: { games: [] } }, api);

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
