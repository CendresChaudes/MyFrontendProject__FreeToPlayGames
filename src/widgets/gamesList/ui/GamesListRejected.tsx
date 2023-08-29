import {
  Genre,
  Platform,
  decrementGamesRefetchAttemptsCount,
  fetchGames,
  getCurrentGenreFilter,
  getCurrentPlatformFilter,
  getCurrentSortType,
  getGamesRefetchAttemptsCount,
} from '@/entities/game';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { FailedLoading } from '@/shared/lib';

export function GamesListRejected() {
  const dispatch = useAppDispatch();

  const currentPlatform = useAppSelector(getCurrentPlatformFilter);
  const currentGenre = useAppSelector(getCurrentGenreFilter);
  const currentSortType = useAppSelector(getCurrentSortType);
  const refetchAttemptsCount = useAppSelector(getGamesRefetchAttemptsCount);

  const handleButtonClick = () => {
    dispatch(decrementGamesRefetchAttemptsCount());

    dispatch(fetchGames({
      params: {
        platform: currentPlatform === Platform.All ? undefined : currentPlatform,
        category: currentGenre === Genre.All ? undefined : currentGenre,
        'sort-by': currentSortType
      }
    }));
  };

  return (
    <FailedLoading refetchAttemptsCount={refetchAttemptsCount} onClick={handleButtonClick} />
  );
}
