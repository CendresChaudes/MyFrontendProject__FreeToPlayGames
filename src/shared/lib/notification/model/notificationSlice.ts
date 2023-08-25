import {
  PayloadAction,
  createSlice,
  nanoid
} from '@reduxjs/toolkit';
import { Notification } from '../types';

type initialStateType = {
  notifications: Notification[];
}

const initialState: initialStateType = {
  notifications: []
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    pushNotification(state, action: PayloadAction<Omit<Notification, 'id'>>) {
      const id = nanoid();
      state.notifications.push({ id, ...action.payload });
    },
    clearNotification(state, action: PayloadAction<string>) {
      state.notifications = state.notifications.filter((notification) => notification.id !== action.payload);
    },
  }
});

export const { pushNotification, clearNotification } = notificationSlice.actions;
