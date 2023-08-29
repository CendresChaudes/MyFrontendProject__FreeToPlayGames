import { createAsyncThunk } from '@reduxjs/toolkit';
import { CACHE_TIME } from '../const';
import { adaptCurrentGameFromAPI } from './adaptCurrentGameFromAPI';
import { APIRoute } from '@/const';

type GameCache = {
  data: GameAdaptedType;
  cacheExpireTime: number;
}

export const fetchCurrentGame = createAsyncThunk<GameAdaptedType, FetchCurrentGameData, AxiosThunkAPI>(
  'api/fetchCurrentGame',
  async ({ cancelToken, id }, { extra: api }) => {
    const item = localStorage.getItem(String(id));

    if (item) {
      const cache = JSON.parse(item) as GameCache;

      if (cache?.cacheExpireTime > new Date().getTime()) {
        return cache.data;
      }

      localStorage.removeItem(String(id));
    }

    const { data } = await api.get<GameSourceType>(APIRoute.Game, { cancelToken, params: { id } });
    const adaptedData = adaptCurrentGameFromAPI(data);

    localStorage.setItem(String(id), JSON.stringify({
      data: adaptedData,
      cacheExpireTime: new Date().getTime() + CACHE_TIME,
    }));

    return adaptedData;
  }
);
