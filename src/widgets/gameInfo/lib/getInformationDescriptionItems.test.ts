import { createAdaptedMockCurrentGame } from '@/entities/game/tests-index';
import { getInformationDescriptionItems } from './getInformationDescriptionItems';

jest.mock('@/shared/lib', () => ({
  isDataItemEmpty: <T>(item: T) => item
}));

describe('Function: getInformationDescriptionItems', () => {
  test('Should return an array of description items', () => {
    const mockCurrentGame = createAdaptedMockCurrentGame();

    const expectedResult = [
      {
        key: '1',
        label: 'Genre',
        children: mockCurrentGame.genre,
      },
      {
        key: '2',
        label: 'Developer',
        children: mockCurrentGame.developer,
      },
      {
        key: '3',
        label: 'Publisher',
        children: mockCurrentGame.publisher,
      },
      {
        key: '4',
        label: 'Release Date',
        children: mockCurrentGame.releaseDate,
      },
    ];

    const result = getInformationDescriptionItems(mockCurrentGame);

    expect(result).toEqual(expectedResult);
  });
});

