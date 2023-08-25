import { createAsyncThunk } from '@reduxjs/toolkit';
import { pushNotification } from '@/shared/lib';
import { adaptCurrentGameFromAPI } from './adaptCurrentGameFromAPI';
import { APIRoute } from '@/const';

export const fetchCurrentGame = createAsyncThunk<GameAdaptedType, number, AxiosThunkAPI>(
  'api/fetchCurrentGame',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<GameSourceType>(APIRoute.Game, { params: { id } });

      return adaptCurrentGameFromAPI(data);
    } catch (err) {
      dispatch(pushNotification({
        type: 'error',
        message: 'Failed to load game'
      }));

      throw err;
    }
  }
);
