import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItemFromCache, removeItemFromCache, setItemToCache } from '@/shared/lib';
import { CACHE_TIME } from '../const';
import { adaptCurrentGameFromAPI } from './adaptCurrentGameFromAPI';
import { APIRoute } from '@/const';

type GameCache = {
  data: GameAdaptedType;
  cacheExpireTime: number;
}

export const fetchCurrentGame = createAsyncThunk<GameAdaptedType, FetchCurrentGameData, AxiosThunkAPI>(
  'api/fetchCurrentGame',
  async ({ id, cancelToken }, { extra: api }) => {
    const item = getItemFromCache(String(id));

    if (item) {
      const cache = JSON.parse(item) as GameCache;

      if (cache.cacheExpireTime > new Date().getTime()) {
        return cache.data;
      }

      removeItemFromCache(String(id));
    }

    const { data } = await api.get<GameSourceType>(APIRoute.Game, { params: { id }, cancelToken });
    const adaptedData = adaptCurrentGameFromAPI(data);

    setItemToCache(String(id), adaptedData, CACHE_TIME);

    return adaptedData;
  }
);
