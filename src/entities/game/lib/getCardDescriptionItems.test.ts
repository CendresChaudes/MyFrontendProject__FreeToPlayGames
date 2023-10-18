import { getCardDescriptionItems } from './getCardDescriptionItems';

describe('Function: getCardDescriptionItems', () => {
  test('Should return an array of description items', () => {
    const mockData: GamesAdaptedType = {
      id: 540,
      title: 'Overwatch 2',
      thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
      shortDescription: 'A hero-focused first-person team shooter from Blizzard Entertainment.',
      gameUrl: 'https://www.freetogame.com/open/overwatch-2',
      genre: 'Shooter',
      platform: 'PC (Windows)',
      publisher: 'Activision Blizzard',
      developer: 'Blizzard Entertainment',
      releaseDate: '04-10-2022',
      freetogameProfileUrl: 'https://www.freetogame.com/overwatch-2'
    };

    const result = getCardDescriptionItems(mockData);

    const expectedResult = [
      {
        key: '1',
        label: 'Genre',
        children: mockData.genre,
      },
      {
        key: '2',
        label: 'Publisher',
        children: mockData.publisher,
      },
      {
        key: '3',
        label: 'Release Date',
        children: mockData.releaseDate,
      },
    ];

    expect(result).toEqual(expectedResult);
  });
});
