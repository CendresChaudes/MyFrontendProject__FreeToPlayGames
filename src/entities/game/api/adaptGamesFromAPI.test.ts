import { createAdaptedMockGamesData } from '../tests-lib/createAdaptedMockGamesData';
import { createSourceMockGamesData } from '../tests-lib/createSourceMockGamesData';
import { adaptGamesFromAPI } from './adaptGamesFromAPI';

describe('Function: adaptGamesFromAPI', () => {
  test('Should return adapted games data', () => {
    const sourceData = createSourceMockGamesData();
    const adaptedData = createAdaptedMockGamesData();
    const expectedResult = adaptedData;

    const result = adaptGamesFromAPI(sourceData);

    expect(result).toEqual(expectedResult);
  });
});
