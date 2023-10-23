import { createAsyncThunk } from '@reduxjs/toolkit';
import { adaptGamesFromAPI } from './adaptGamesFromAPI';
import { APIRoute } from '@/const';

export const fetchGames = createAsyncThunk<GamesAdaptedType[], FetchGamesType, AxiosThunkAPI>(
  'api/fetchGames',
  async ({ params, cancelToken }, { extra: api }) => {
    const { data } = await api.get<GamesSourceType[]>(APIRoute.Games, { params, cancelToken });

    return adaptGamesFromAPI(data);
  }
);
