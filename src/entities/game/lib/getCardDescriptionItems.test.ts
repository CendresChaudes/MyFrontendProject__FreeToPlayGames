import { createMockGamesData } from '../tests-lib/createMockGamesData';
import { getCardDescriptionItems } from './getCardDescriptionItems';

describe('Function: getCardDescriptionItems', () => {
  test('Should return an array of description items', () => {
    const mockDataFromGamesArray = createMockGamesData()[0];

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
