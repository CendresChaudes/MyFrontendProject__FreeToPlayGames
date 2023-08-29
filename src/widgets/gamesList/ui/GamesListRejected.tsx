import {
  decrementGamesRefetchAttemptsCount,
  fetchGames,
  getGamesRefetchAttemptsCount,
} from '@/entities/game';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { FailedLoading } from '@/shared/lib';

export function GamesListRejected() {
  const dispatch = useAppDispatch();
  const refetchAttemptsCount = useAppSelector(getGamesRefetchAttemptsCount);

  const handleButtonClick = () => {
    dispatch(decrementGamesRefetchAttemptsCount());
    dispatch(fetchGames({}));
  };

  return (
    <FailedLoading refetchAttemptsCount={refetchAttemptsCount} onClick={handleButtonClick} />
  );
}
