import { APIStatus } from '@/shared/api';
import { Platform, Genre, SortType } from '../const';
import {
  getGames,
  getGamesStatus,
  getCurrentGame,
  getCurrentGameStatus,
  getCurrentPlatformFilter,
  getCurrentGenreFilter,
  getCurrentSortType,
  getGamesRefetchAttemptsCount,
  getCurrentGameRefetchAttemptsCount,
} from './selectors';

describe('Redux selectors: "game" domain', () => {
  const mockGamesData: GamesAdaptedType[] = [
    {
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
    }
  ];

  const mockCurrentGameData: GameAdaptedType = {
    id: 452,
    title: 'Call Of Duty: Warzone',
    thumbnail: 'https://www.freetogame.com/g/452/thumbnail.jpg',
    status: 'Live',
    shortDescription: 'A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.',
    description: 'Call of Duty: Warzone is both a standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare. Warzone features two modes — the general 150-player battle royle, and “Plunder”. The latter mode is described as a “race to deposit the most Cash”. In both modes players can both earn and loot cash to be used when purchasing in-match equipment, field upgrades, and more. Both cash and XP are earned in a variety of ways, including completing contracts.\r\n\r\nAn interesting feature of the game is one that allows players who have been killed in a match to rejoin it by winning a 1v1 match against other felled players in the Gulag.\r\n\r\nOf course, being a battle royale, the game does offer a battle pass. The pass offers players new weapons, playable characters, Call of Duty points, blueprints, and more. Players can also earn plenty of new items by completing objectives offered with the pass.',
    gameUrl: 'https://www.freetogame.com/open/call-of-duty-warzone',
    genre: 'Shooter',
    platform: 'Windows',
    publisher: 'Activision',
    developer: 'Infinity Ward',
    releaseDate: '2020-03-10',
    freetogameProfileUrl: 'https://www.freetogame.com/call-of-duty-warzone',
    minimumSystemRequirements: {
      os: 'Windows 7 64-Bit (SP1) or Windows 10 64-Bit',
      processor: 'Intel Core i3-4340 or AMD FX-6300',
      memory: '8GB RAM',
      graphics: 'NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950',
      storage: '175GB HD space'
    },
    screenshots: []
  };

  const mockStore: State = {
    game: {
      games: mockGamesData,
      gamesStatus: APIStatus.Idle,
      currentGame: mockCurrentGameData,
      currentGameStatus: APIStatus.Pending,
      currentPlatformFilter: Platform.All,
      currentGenreFilter: Genre.Shooter,
      currentSortType: SortType.Relevance,
      gamesRefetchAttemptsCount: 3,
      currentGameRefetchAttemptsCount: 5,
    },
  };

  describe('Selector: getGames', () => {
    test('Should return an array of games', () => {
      const { games } = mockStore.game;

      const result = getGames(mockStore);
      const expectedResult = games;

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Selector: getGamesStatus', () => {
    test('Should return a fetching games status', () => {
      const { gamesStatus } = mockStore.game;

      const result = getGamesStatus(mockStore);
      const expectedResult = gamesStatus;

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentGame', () => {
    test('Should return a current game', () => {
      const { currentGame } = mockStore.game;

      const result = getCurrentGame(mockStore);
      const expectedResult = currentGame;

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Selector: getCurrentGameStatus', () => {
    test('Should return a fetching current game status', () => {
      const { currentGameStatus } = mockStore.game;

      const result = getCurrentGameStatus(mockStore);
      const expectedResult = currentGameStatus;

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentPlatformFilter', () => {
    test('Should return a current platform filter', () => {
      const { currentPlatformFilter } = mockStore.game;

      const result = getCurrentPlatformFilter(mockStore);
      const expectedResult = currentPlatformFilter;

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentGenreFilter', () => {
    test('Should return a current genre filter', () => {
      const { currentGenreFilter } = mockStore.game;

      const result = getCurrentGenreFilter(mockStore);
      const expectedResult = currentGenreFilter;

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentSortType', () => {
    test('Should return a current sort type', () => {
      const { currentSortType } = mockStore.game;

      const result = getCurrentSortType(mockStore);
      const expectedResult = currentSortType;

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getGamesRefetchAttemptsCount', () => {
    test('Should return a games refetch attempts count', () => {
      const { gamesRefetchAttemptsCount } = mockStore.game;

      const result = getGamesRefetchAttemptsCount(mockStore);
      const expectedResult = gamesRefetchAttemptsCount;

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentGameRefetchAttemptsCount', () => {
    test('Should return a current game refetch attempts count', () => {
      const { currentGameRefetchAttemptsCount } = mockStore.game;

      const result = getCurrentGameRefetchAttemptsCount(mockStore);
      const expectedResult = currentGameRefetchAttemptsCount;

      expect(result).toBe(expectedResult);
    });
  });
});
