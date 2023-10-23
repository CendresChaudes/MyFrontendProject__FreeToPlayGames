import { createAdaptedMockGames } from '../tests/lib/createAdaptedMockGames';
import { createSourceMockGames } from '../tests/lib/createSourceMockGames';
import { adaptGamesFromAPI } from './adaptGamesFromAPI';

describe('Function: adaptGamesFromAPI', () => {
  test('Should return adapted games data', () => {
    const sourceData = createSourceMockGames();
    const adaptedData = createAdaptedMockGames();
    const expectedResult = adaptedData;

    const result = adaptGamesFromAPI(sourceData);

    expect(result).toEqual(expectedResult);
  });
});
