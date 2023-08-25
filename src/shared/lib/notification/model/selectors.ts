import { Notification } from '../types';

export const getNotifications = (state: State): Notification[] => state.notification.notifications;
