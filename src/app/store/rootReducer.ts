import { combineReducers } from '@reduxjs/toolkit';
import { gameSlice } from '@/entities/game';
import { notificationSlice } from '@/shared/lib';

export const rootReducer = combineReducers({
  [notificationSlice.name]: notificationSlice.reducer,
  [gameSlice.name]: gameSlice.reducer,
});
