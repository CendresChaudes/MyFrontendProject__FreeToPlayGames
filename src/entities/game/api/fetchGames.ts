import { createAsyncThunk } from '@reduxjs/toolkit';
import { adaptGamesFromAPI } from './adaptGamesFromAPI';
import { APIRoute } from '@/const';

export const fetchGames = createAsyncThunk<GamesAdaptedType[], FetchGamesData, AxiosThunkAPI>(
  'api/fetchGames',
  async ({ cancelToken, ...args }, { extra: api }) => {
    const { data } = await api.get<GamesSourceType[]>(APIRoute.Games, { cancelToken, params: args });

    return adaptGamesFromAPI(data);
  }
);
