export const API_URL = import.meta.env.VITE_API_URL as string;
export const REQUEST_TIMEOUT = 5000;

export enum APIStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}
