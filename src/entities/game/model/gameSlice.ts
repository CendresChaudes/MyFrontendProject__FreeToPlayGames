import { createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { fetchCurrentGame } from '../api/fetchCurrentGame';
import { fetchGames } from '../api/fetchGames';

type initialStateType = {
  games: GamesAdaptedType[];
  gamesStatus: APIStatus;
  currentGame: Nullable<GameAdaptedType>;
  currentGameStatus: APIStatus;
}

const initialState: initialStateType = {
  games: [],
  gamesStatus: APIStatus.Idle,
  currentGame: null,
  currentGameStatus: APIStatus.Idle,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
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
      });
  }
});
