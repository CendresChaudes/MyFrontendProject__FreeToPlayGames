import { createAdaptedMockGamesData } from '../tests/lib/createAdaptedMockGamesData';
import { getCardDescriptionItems } from './getCardDescriptionItems';

jest.mock('@/shared/lib', () => ({
  isDataItemEmpty: <T>(item: T) => item
}));

describe('Function: getCardDescriptionItems', () => {
  test('Should return an array of description items', () => {
    const mockDataFromGamesArray = createAdaptedMockGamesData()[0];

    const expectedResult = [
      {
        key: '1',
        label: 'Genre',
        children: mockDataFromGamesArray.genre,
      },
      {
        key: '2',
        label: 'Publisher',
        children: mockDataFromGamesArray.publisher,
      },
      {
        key: '3',
        label: 'Release Date',
        children: mockDataFromGamesArray.releaseDate,
      },
    ];

    const result = getCardDescriptionItems(mockDataFromGamesArray);

    expect(result).toEqual(expectedResult);
  });
});
