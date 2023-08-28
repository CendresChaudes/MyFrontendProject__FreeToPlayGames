import { createAsyncThunk } from '@reduxjs/toolkit';
import { adaptCurrentGameFromAPI } from './adaptCurrentGameFromAPI';
import { APIRoute } from '@/const';

export const fetchCurrentGame = createAsyncThunk<GameAdaptedType, number, AxiosThunkAPI>(
  'api/fetchCurrentGame',
  async (id, { extra: api }) => {
    const { data } = await api.get<GameSourceType>(APIRoute.Game, { params: { id } });

    return adaptCurrentGameFromAPI(data);
  }
);
