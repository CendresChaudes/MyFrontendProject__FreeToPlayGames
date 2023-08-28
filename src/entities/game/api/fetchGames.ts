import { createAsyncThunk } from '@reduxjs/toolkit';
import { adaptGamesFromAPI } from './adaptGamesFromAPI';
import { APIRoute } from '@/const';

export const fetchGames = createAsyncThunk<GamesAdaptedType[], Params | undefined, AxiosThunkAPI>(
  'api/fetchGames',
  async (params = {}, { extra: api }) => {
    const { data } = await api.get<GamesSourceType[]>(APIRoute.Games, { params });

    return adaptGamesFromAPI(data);
  }
);
