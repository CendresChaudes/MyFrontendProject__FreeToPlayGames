import { combineReducers } from '@reduxjs/toolkit';
import { gameSlice } from '@/entities/game';

export const rootReducer = combineReducers({
  [gameSlice.name]: gameSlice.reducer,
});
