import { APIStatus } from '@/shared/api/const';
import { Platform, Genre, SortType } from '../const';
import { createAdaptedMockCurrentGame } from '../tests/lib/createAdaptedMockCurrentGame';
import { createAdaptedMockGames } from '../tests/lib/createAdaptedMockGames';
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
  getCurrentPageNumber
} from './selectors';

jest.mock('@/shared/lib', () => ({
  createStatusObj: () => ({})
}));

describe('Redux selectors: "game" domain', () => {
  const mockGames = createAdaptedMockGames();
  const mockCurrentGame = createAdaptedMockCurrentGame();

  const mockStore: State = {
    game: {
      games: mockGames,
      gamesStatus: APIStatus.Idle,
      currentGame: mockCurrentGame,
      currentGameStatus: APIStatus.Idle,
      currentPlatformFilter: Platform.All,
      currentGenreFilter: Genre.Shooter,
      currentSortType: SortType.Relevance,
      gamesRefetchAttemptsCount: 3,
      currentGameRefetchAttemptsCount: 5,
      currentPageNumber: 1
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

  describe('Selector: getCurrentPageNumber', () => {
    test('Should return a current page number', () => {
      const { currentPageNumber } = mockStore.game;

      const result = getCurrentPageNumber(mockStore);
      const expectedResult = currentPageNumber;

      expect(result).toBe(expectedResult);
    });
  });
});
