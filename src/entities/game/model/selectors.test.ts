import { APIStatus } from '@/shared/api/const';
import { Platform, Genre, SortType, REFETCH_ATTEMPTS_COUNT } from '../const';
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
      gamesRefetchAttemptsCount: REFETCH_ATTEMPTS_COUNT,
      currentGameRefetchAttemptsCount: REFETCH_ATTEMPTS_COUNT,
      currentPageNumber: 1
    },
  };

  describe('Selector: getGames', () => {
    test('Should return an array of games', () => {
      const expectedResult = mockStore.game.games;

      const result = getGames(mockStore);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Selector: getGamesStatus', () => {
    test('Should return a fetching games status', () => {
      const expectedResult = mockStore.game.gamesStatus;

      const result = getGamesStatus(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentGame', () => {
    test('Should return a current game', () => {
      const expectedResult = mockStore.game.currentGame;

      const result = getCurrentGame(mockStore);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Selector: getCurrentGameStatus', () => {
    test('Should return a fetching current game status', () => {
      const expectedResult = mockStore.game.currentGameStatus;

      const result = getCurrentGameStatus(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentPlatformFilter', () => {
    test('Should return a current platform filter', () => {
      const expectedResult = mockStore.game.currentPlatformFilter;

      const result = getCurrentPlatformFilter(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentGenreFilter', () => {
    test('Should return a current genre filter', () => {
      const expectedResult = mockStore.game.currentGenreFilter;

      const result = getCurrentGenreFilter(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentSortType', () => {
    test('Should return a current sort type', () => {
      const expectedResult = mockStore.game.currentSortType;

      const result = getCurrentSortType(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getGamesRefetchAttemptsCount', () => {
    test('Should return a games refetch attempts count', () => {
      const expectedResult = mockStore.game.gamesRefetchAttemptsCount;

      const result = getGamesRefetchAttemptsCount(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentGameRefetchAttemptsCount', () => {
    test('Should return a current game refetch attempts count', () => {
      const expectedResult = mockStore.game.currentGameRefetchAttemptsCount;

      const result = getCurrentGameRefetchAttemptsCount(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentPageNumber', () => {
    test('Should return a current page number', () => {
      const expectedResult = mockStore.game.currentPageNumber;

      const result = getCurrentPageNumber(mockStore);

      expect(result).toBe(expectedResult);
    });
  });
});
