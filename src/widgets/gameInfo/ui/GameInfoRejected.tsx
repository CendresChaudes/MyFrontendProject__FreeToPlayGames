import {
  decrementRefetchAttemptsCount,
  fetchCurrentGame,
  getRefetchAttemptsCount,
} from '@/entities/game';
import {
  FailedLoading,
  useAppDispatch,
  useAppSelector
} from '@/shared/lib';

type GameInfoRejectedProps = {
  id: number;
};

export function GameInfoRejected({ id }: GameInfoRejectedProps) {
  const dispatch = useAppDispatch();
  const refetchAttemptsCount = useAppSelector(getRefetchAttemptsCount);

  const handleButtonClick = () => {
    dispatch(decrementRefetchAttemptsCount());
    dispatch(fetchCurrentGame(id));
  };

  return <FailedLoading refetchAttemptsCount={refetchAttemptsCount} onClick={handleButtonClick} />;
}
