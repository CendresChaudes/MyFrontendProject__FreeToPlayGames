import {
  decrementRefetchAttemptsCount,
  fetchGames,
  getRefetchAttemptsCount,
} from '@/entities/game';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { FailedLoading } from '@/shared/lib';

export function GamesListRejected() {
  const dispatch = useAppDispatch();
  const refetchAttemptsCount = useAppSelector(getRefetchAttemptsCount);

  const handleButtonClick = () => {
    dispatch(decrementRefetchAttemptsCount());
    dispatch(fetchGames());
  };

  return (
    <FailedLoading refetchAttemptsCount={refetchAttemptsCount} onClick={handleButtonClick} />
  );
}
