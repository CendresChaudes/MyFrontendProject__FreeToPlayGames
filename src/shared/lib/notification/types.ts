export type Notification = {
  id: string;
  type: 'error' | 'warning' | 'success' | 'info' | 'default';
  message: string;
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
  theme?: 'light' | 'dark' | 'colored';
  duration?: number;
}
