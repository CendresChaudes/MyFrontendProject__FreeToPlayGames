import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItemFromCache, removeItemFromCache, setItemToCache } from '@/shared/lib';
import { CACHE_TIME } from '../const';
import { adaptCurrentGameFromAPI } from './adaptCurrentGameFromAPI';
import { APIRoute } from '@/const';

type GameCache = {
  data: CurrentGameAdaptedType;
  cacheExpireTime: number;
}

export const fetchCurrentGame = createAsyncThunk<CurrentGameAdaptedType, FetchCurrentGameType, AxiosThunkAPI>(
  'api/fetchCurrentGame',
  async ({ id, cancelToken }, { extra: api }) => {
    const item = getItemFromCache(String(id)) as GameCache;

    if (item) {
      if (item.cacheExpireTime > new Date().getTime()) {
        return item.data;
      }

      removeItemFromCache(String(id));
    }

    const { data } = await api.get<CurrentGameSourceType>(APIRoute.Game, { params: { id }, cancelToken });
    const adaptedData = adaptCurrentGameFromAPI(data);

    setItemToCache(String(id), adaptedData, CACHE_TIME);

    return adaptedData;
  }
);
