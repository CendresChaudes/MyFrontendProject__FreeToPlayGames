import { createAsyncThunk } from '@reduxjs/toolkit';
import { adaptCurrentGameFromAPI } from './adaptCurrentGameFromAPI';
import { APIRoute } from '@/const';

export const fetchCurrentGame = createAsyncThunk<GameAdaptedType, FetchCurrentGameData, AxiosThunkAPI>(
  'api/fetchCurrentGame',
  async ({ cancelToken, id }, { extra: api }) => {
    const { data } = await api.get<GameSourceType>(APIRoute.Game, { cancelToken, params: { id } });

    return adaptCurrentGameFromAPI(data);
  }
);
