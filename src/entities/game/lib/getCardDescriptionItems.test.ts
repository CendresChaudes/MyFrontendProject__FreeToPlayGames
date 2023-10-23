import { createAdaptedMockGames } from '../tests/lib/createAdaptedMockGames';
import { getCardDescriptionItems } from './getCardDescriptionItems';

jest.mock('@/shared/lib', () => ({
  isDataItemEmpty: <T>(item: T) => item
}));

describe('Function: getCardDescriptionItems', () => {
  test('Should return an array of description items', () => {
    const mockGame = createAdaptedMockGames()[0];

    const expectedResult = [
      {
        key: '1',
        label: 'Genre',
        children: mockGame.genre,
      },
      {
        key: '2',
        label: 'Publisher',
        children: mockGame.publisher,
      },
      {
        key: '3',
        label: 'Release Date',
        children: mockGame.releaseDate,
      },
    ];

    const result = getCardDescriptionItems(mockGame);

    expect(result).toEqual(expectedResult);
  });
});
