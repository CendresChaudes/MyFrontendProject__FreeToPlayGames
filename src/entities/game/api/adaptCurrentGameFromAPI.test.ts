import { createAdaptedMockCurrentGame } from '../tests/lib/createAdaptedMockCurrentGame';
import { createSourceMockCurrentGame } from '../tests/lib/createSourceMockCurrentGame';
import { adaptCurrentGameFromAPI } from './adaptCurrentGameFromAPI';

describe('Function: adaptCurrentGameFromAPI', () => {
  test('Should return adapted games data', () => {
    const sourceData = createSourceMockCurrentGame();
    const adaptedData = createAdaptedMockCurrentGame();
    const expectedResult = adaptedData;

    const result = adaptCurrentGameFromAPI(sourceData);

    expect(result).toEqual(expectedResult);
  });
});
