export { fetchGames } from './api/fetchGames';
export { fetchCurrentGame } from './api/fetchCurrentGame';
export {
  gameSlice,
  changeCurrentPlatformFilter,
  changeCurrentGenreFilter,
  changeCurrentSortType,
} from './model/gameSlice';
export {
  getGames,
  getCurrentGame,
  getGamesStatusObj,
  getCurrentGameStatusObj,
  getCurrentPlatformFilter,
  getCurrentGenreFilter,
  getCurrentSortType
} from './model/selectors';
export { Platform, Genre, SortType } from './const';
