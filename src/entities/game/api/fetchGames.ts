import { createAsyncThunk } from '@reduxjs/toolkit';
import { pushNotification } from '@/shared/lib';
import { adaptGamesFromAPI } from './adaptGamesFromAPI';
import { APIRoute } from '@/const';

export const fetchGames = createAsyncThunk<GamesAdaptedType[], Params | undefined, AxiosThunkAPI>(
  'api/fetchGames',
  async (params = {}, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<GamesSourceType[]>(APIRoute.Games, { params });

      return adaptGamesFromAPI(data);
    } catch (err) {
      dispatch(pushNotification({
        type: 'error',
        message: 'Failed to load games'
      }));

      throw err;
    }
  }
);
