import {
  toast,
  ToastOptions,
  ToastContainer
} from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../index';
import { clearNotification } from '../index';
import { getNotifications } from '../model/selectors';

export function Notification() {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(getNotifications);

  const renderNotifications = () => {
    notifications.forEach((notification) => {
      const notificationOptions: ToastOptions = {
        position: notification.position,
        theme: notification.theme,
        autoClose: notification.duration,
        toastId: notification.id,
        onClose: () => dispatch(clearNotification(notification.id))
      };

      switch (notification.type) {
        case 'error':
          toast.error(notification.message, notificationOptions);
          break;
        case 'warning':
          toast.warn(notification.message, notificationOptions);
          break;
        case 'success':
          toast.success(notification.message, notificationOptions);
          break;
        case 'info':
          toast.info(notification.message, notificationOptions);
          break;
        default:
          toast(notification.message, notificationOptions);
      }
    });
  };

  return (
    <>
      <ToastContainer />
      {void renderNotifications()}
    </>);
}
