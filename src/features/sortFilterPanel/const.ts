import { Platform, Genre, SortType } from '@/entities/game';
import { getObjectKeys } from '@/shared/lib';

export const platformItems = getObjectKeys(Platform).map((platform, index) => ({
  key: String(++index),
  label: platform
}));

export const genreItems = getObjectKeys(Genre).map((genre, index) => ({
  key: String(++index),
  label: genre
}));

export const sortItems = getObjectKeys(SortType).map((type, index) => ({
  key: String(++index),
  label: type
}));
