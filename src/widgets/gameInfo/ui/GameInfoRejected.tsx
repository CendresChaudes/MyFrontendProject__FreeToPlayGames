import {
  decrementCurrentGameRefetchAttemptsCount,
  fetchCurrentGame,
  getCurrentGameRefetchAttemptsCount,
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
  const refetchAttemptsCount = useAppSelector(getCurrentGameRefetchAttemptsCount);

  const handleButtonClick = () => {
    dispatch(decrementCurrentGameRefetchAttemptsCount());
    dispatch(fetchCurrentGame({ id: Number(id) }));
  };

  return <FailedLoading refetchAttemptsCount={refetchAttemptsCount} onClick={handleButtonClick} />;
}
