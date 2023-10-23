import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import thunk from 'redux-thunk';
import { createApi } from '../../api';

type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;

export const createMockStore = <T extends object>(data: T, api: AxiosInstance) => {
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middlewares);

  return mockStoreCreator(data);
};
