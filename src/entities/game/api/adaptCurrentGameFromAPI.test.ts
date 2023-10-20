import { createAdaptedMockCurrentGameData } from '../tests/lib/createAdaptedMockCurrentGameData';
import { createSourceMockCurrentGameData } from '../tests/lib/createSourceMockCurrentGameData';
import { adaptCurrentGameFromAPI } from './adaptCurrentGameFromAPI';

describe('Function: adaptCurrentGameFromAPI', () => {
  test('Should return adapted games data', () => {
    const sourceData = createSourceMockCurrentGameData();
    const adaptedData = createAdaptedMockCurrentGameData();
    const expectedResult = adaptedData;

    const result = adaptCurrentGameFromAPI(sourceData);

    expect(result).toEqual(expectedResult);
  });
});
