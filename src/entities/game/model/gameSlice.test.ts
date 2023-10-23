import { APIStatus } from '@/shared/api';
import { resetState } from '@/shared/lib';
import { fetchCurrentGame } from '../api/fetchCurrentGame';
import { fetchGames } from '../api/fetchGames';
import { Platform, Genre, SortType, REFETCH_ATTEMPTS_COUNT } from '../const';
import { createAdaptedMockCurrentGame } from '../tests/lib/createAdaptedMockCurrentGame';
import { createAdaptedMockGames } from '../tests/lib/createAdaptedMockGames';
import {
  gameSlice,
  changeCurrentPlatformFilter,
  changeCurrentGenreFilter,
  changeCurrentSortType,
  decrementGamesRefetchAttemptsCount,
  decrementCurrentGameRefetchAttemptsCount,
  initialStateType,
  changeCurrentPageNumber,
} from './gameSlice';

jest.mock('../api/adaptGamesFromAPI', () => ({
  adaptGamesFromAPI: <T>(item: T) => item
}));

jest.mock('../api/adaptCurrentGameFromAPI', () => ({
  adaptCurrentGameFromAPI: <T>(item: T) => item
}));

describe('Redux slice: gameSlice', () => {
  const mockGames = createAdaptedMockGames();
  const mockCurrentGame = createAdaptedMockCurrentGame();

  const initialState: initialStateType = {
    games: [],
    gamesStatus: APIStatus.Idle,
    currentGame: null,
    currentGameStatus: APIStatus.Idle,
    currentPlatformFilter: Platform.All,
    currentGenreFilter: Genre.All,
    currentSortType: SortType.Relevance,
    gamesRefetchAttemptsCount: REFETCH_ATTEMPTS_COUNT,
    currentGameRefetchAttemptsCount: REFETCH_ATTEMPTS_COUNT,
    currentPageNumber: 1,
  };

  describe('Reducer: changeCurrentPlatformFilter', () => {
    test('Should change a current platform filter', () => {
      const newCurrentPlatformFilter = Platform.Browser;

      const expectedResult = {
        ...initialState,
        currentPlatformFilter: newCurrentPlatformFilter,
      };

      const result = gameSlice.reducer(initialState, changeCurrentPlatformFilter(newCurrentPlatformFilter));

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Reducer: changeCurrentGenreFilter', () => {
    test('Should change a current genre filter', () => {
      const newCurrentGenreFilter = Genre.MMORPG;

      const expectedResult = {
        ...initialState,
        currentGenreFilter: newCurrentGenreFilter,
      };

      const result = gameSlice.reducer(initialState, changeCurrentGenreFilter(newCurrentGenreFilter));

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Reducer: changeCurrentSortType', () => {
    test('Should change a current sort type', () => {
      const newCurrentSortType = SortType.Alphabetical;

      const expectedResult = {
        ...initialState,
        currentSortType: newCurrentSortType,
      };

      const result = gameSlice.reducer(initialState, changeCurrentSortType(newCurrentSortType));

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Reducer: decrementGamesRefetchAttemptsCount', () => {
    test('Should decrement games refetch attempts count by one', () => {
      const expectedResult = {
        ...initialState,
        gamesRefetchAttemptsCount: REFETCH_ATTEMPTS_COUNT - 1,
      };

      const result = gameSlice.reducer(initialState, decrementGamesRefetchAttemptsCount);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Reducer: decrementCurrentGameRefetchAttemptsCount', () => {
    test('Should decrement games refetch attempts count by one', () => {
      const expectedResult = {
        ...initialState,
        currentGameRefetchAttemptsCount: REFETCH_ATTEMPTS_COUNT - 1,
      };

      const result = gameSlice.reducer(initialState, decrementCurrentGameRefetchAttemptsCount);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Reducer: changeCurrentPageNumber', () => {
    test('Should change a page number', () => {
      const newCurrentPageNumber = 4;

      const expectedResult = {
        ...initialState,
        currentPageNumber: newCurrentPageNumber,
      };

      const result = gameSlice.reducer(initialState, changeCurrentPageNumber(newCurrentPageNumber));

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Extra reducer: resetState', () => {
    test('Should set "currentPageNumber" to 1', () => {
      const stateBeforeReset = {
        ...initialState,
        currentPageNumber: 3,
      };

      const expectedResult = {
        ...initialState,
        currentPageNumber: 1,
      };

      const result = gameSlice.reducer(stateBeforeReset, resetState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Extra reducer: fetchGames', () => {
    test('fetchGames.pending should set "gamesStatus" to "APIStatus.Pending"', () => {
      const expectedResult = {
        ...initialState,
        gamesStatus: APIStatus.Pending,
      };

      const result = gameSlice.reducer(initialState, fetchGames.pending);

      expect(result).toEqual(expectedResult);
    });

    test(`fetchGames.fulfilled should set "games" to array with data, "gamesStatus" to "APIStatus.Fulfilled",
        "gamesRefetchAttemptsCount" to "REFETCH_ATTEMPTS_COUNT" (default value)`, () => {
      const stateBeforeFulfilled = {
        ...initialState,
        games: [],
        gamesStatus: APIStatus.Idle,
        gamesRefetchAttemptsCount: 1
      };

      const mockParams: FetchGamesType = {
        params: {
          platform: Platform.All,
          category: Genre.All,
          'sort-by': SortType.Relevance,
        },
      };

      const expectedResult = {
        ...initialState,
        games: mockGames,
        gamesStatus: APIStatus.Fulfilled,
        gamesRefetchAttemptsCount: REFETCH_ATTEMPTS_COUNT,
      };

      const result = gameSlice.reducer(stateBeforeFulfilled, fetchGames.fulfilled(mockGames, '', mockParams));

      expect(result).toEqual(expectedResult);
    });

    test('fetchGames.rejected should set "gamesStatus" to "APIStatus.Rejected"', () => {
      const expectedResult = {
        ...initialState,
        gamesStatus: APIStatus.Rejected,
      };

      const result = gameSlice.reducer(initialState, fetchGames.rejected);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Extra reducer: fetchCurrentGame', () => {
    test('fetchCurrentGame.pending should set "currentGameStatus" to "APIStatus.Pending"', () => {
      const expectedResult = {
        ...initialState,
        currentGameStatus: APIStatus.Pending,
      };

      const result = gameSlice.reducer(initialState, fetchCurrentGame.pending);

      expect(result).toEqual(expectedResult);
    });

    test(`fetchCurrentGame.fulfilled should set "currentGame" to current game data, "currentGameStatus" to "APIStatus.Fulfilled",
        "currentGameRefetchAttemptsCount" to "REFETCH_ATTEMPTS_COUNT" (default value)`, () => {
      const stateBeforeFulfilled = {
        ...initialState,
        currentGame: null,
        currentGameStatus: APIStatus.Idle,
        currentGameRefetchAttemptsCount: 1,
      };

      const mockParams: FetchCurrentGameType = { id: 1 };

      const expectedResult = {
        ...initialState,
        currentGame: mockCurrentGame,
        currentGameStatus: APIStatus.Fulfilled,
        currentGameRefetchAttemptsCount: REFETCH_ATTEMPTS_COUNT
      };

      const result = gameSlice.reducer(stateBeforeFulfilled, fetchCurrentGame.fulfilled(mockCurrentGame, '', mockParams));

      expect(result).toEqual(expectedResult);
    });

    test('fetchCurrentGame.rejected should set "currentGame" to "null", "currentGameStatus" to "APIStatus.Rejected"', () => {
      const stateBeforeRejected = {
        ...initialState,
        currentGame: mockCurrentGame,
        currentGameStatus: APIStatus.Fulfilled,
      };

      const expectedResult = {
        ...initialState,
        currentGame: null,
        currentGameStatus: APIStatus.Rejected,
      };

      const result = gameSlice.reducer(stateBeforeRejected, fetchCurrentGame.rejected);

      expect(result).toEqual(expectedResult);
    });
  });
});
