import { APIStatus } from '@/shared/api/const';
import { Platform, Genre, SortType } from '../const';
import { createAdaptedMockCurrentGameData } from '../tests/lib/createAdaptedMockCurrentGameData';
import { createAdaptedMockGamesData } from '../tests/lib/createAdaptedMockGamesData';
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

jest.mock('@/shared/lib', () => ({
  createStatusObj: () => ({})
}));

describe('Redux selectors: "game" domain', () => {
  const mockGamesData = createAdaptedMockGamesData();
  const mockCurrentGameData = createAdaptedMockCurrentGameData();

  const mockStore: State = {
    game: {
      games: mockGamesData,
      gamesStatus: APIStatus.Idle,
      currentGame: mockCurrentGameData,
      currentGameStatus: APIStatus.Idle,
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
