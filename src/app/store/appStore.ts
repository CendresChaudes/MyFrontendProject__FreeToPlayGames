import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '@/shared/api';
import { rootReducer } from './rootReducer';

export type State = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;

const api = createAPI();

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
