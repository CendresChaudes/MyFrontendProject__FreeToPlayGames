import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { fetchCurrentGame } from '../api/fetchCurrentGame';
import { fetchGames } from '../api/fetchGames';
import { Platform, Genre, SortType, REFETCH_ATTEMPTS_COUNT } from '../const';

type initialStateType = {
  games: GamesAdaptedType[];
  gamesStatus: APIStatus;
  currentGame: Nullable<GameAdaptedType>;
  currentGameStatus: APIStatus;
  currentPlatformFilter: Platform;
  currentGenreFilter: Genre;
  currentSortType: SortType;
  gamesRefetchAttemptsCount: number;
  currentGameRefetchAttemptsCount: number;
};

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
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeCurrentPlatformFilter(state, action: PayloadAction<Platform>) {
      state.currentPlatformFilter = action.payload;
    },
    changeCurrentGenreFilter(state, action: PayloadAction<Genre>) {
      state.currentGenreFilter = action.payload;
    },
    changeCurrentSortType(state, action: PayloadAction<SortType>) {
      state.currentSortType = action.payload;
    },
    decrementGamesRefetchAttemptsCount(state) {
      state.gamesRefetchAttemptsCount = state.gamesRefetchAttemptsCount - 1;
    },
    decrementCurrentGameRefetchAttemptsCount(state) {
      state.currentGameRefetchAttemptsCount = state.currentGameRefetchAttemptsCount - 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.gamesStatus = APIStatus.Pending;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.gamesStatus = APIStatus.Fulfilled;
        state.games = action.payload;
        state.gamesRefetchAttemptsCount = REFETCH_ATTEMPTS_COUNT;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.gamesStatus = APIStatus.Rejected;
      })
      .addCase(fetchCurrentGame.pending, (state) => {
        state.currentGameStatus = APIStatus.Pending;
      })
      .addCase(fetchCurrentGame.fulfilled, (state, action) => {
        state.currentGameStatus = APIStatus.Fulfilled;
        state.currentGame = action.payload;
        state.currentGameRefetchAttemptsCount = REFETCH_ATTEMPTS_COUNT;
      })
      .addCase(fetchCurrentGame.rejected, (state) => {
        state.currentGameStatus = APIStatus.Rejected;
        state.currentGame = null;
      });
  },
});

export const {
  changeCurrentPlatformFilter,
  changeCurrentGenreFilter,
  changeCurrentSortType,
  decrementGamesRefetchAttemptsCount,
  decrementCurrentGameRefetchAttemptsCount
} = gameSlice.actions;
