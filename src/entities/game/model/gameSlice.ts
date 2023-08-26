import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { fetchCurrentGame } from '../api/fetchCurrentGame';
import { fetchGames } from '../api/fetchGames';
import { Platform, Genre, SortType } from '../const';

type initialStateType = {
  games: GamesAdaptedType[];
  gamesStatus: APIStatus;
  currentGame: Nullable<GameAdaptedType>;
  currentGameStatus: APIStatus;
  currentPlatformFilter: Platform;
  currentGenreFilter: Genre;
  currentSortType: SortType;
};

const initialState: initialStateType = {
  games: [],
  gamesStatus: APIStatus.Idle,
  currentGame: null,
  currentGameStatus: APIStatus.Idle,
  currentPlatformFilter: Platform.All,
  currentGenreFilter: Genre.All,
  currentSortType: SortType.Relevance,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeCurrentPlatformFilter(
      state,
      action: PayloadAction<Platform>
    ) {
      state.currentPlatformFilter = action.payload;
    },
    changeCurrentGenreFilter(
      state,
      action: PayloadAction<Genre>
    ) {
      state.currentGenreFilter = action.payload;
    },
    changeCurrentSortType(
      state,
      action: PayloadAction<SortType>
    ) {
      state.currentSortType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.gamesStatus = APIStatus.Pending;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.gamesStatus = APIStatus.Fulfilled;
        state.games = action.payload;
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
} = gameSlice.actions;
