export const API_URL = process.env.VITE_API_URL as string;
export const REQUEST_TIMEOUT = 5000;

export enum APIStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}

export const RapidAPIHeaders = {
  'X-RapidAPI-Key': '1c73311ec4msh3a09adf26d821f6p19115fjsn34ed3f8d9c2a',
  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
};
