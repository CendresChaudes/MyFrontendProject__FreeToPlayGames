import { getCardDescriptionItems } from './getCardDescriptionItems';

describe('Function: getCardDescriptionItems', () => {
  test('should return array of description items', () => {
    const data = {
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

    const expectedResult = [
      {
        key: '1',
        label: 'Genre',
        children: data.genre,
      },
      {
        key: '2',
        label: 'Publisher',
        children: data.publisher,
      },
      {
        key: '3',
        label: 'Release Date',
        children: data.releaseDate,
      },
    ];

    expect(getCardDescriptionItems(data)).toEqual(expectedResult);
  });
});
