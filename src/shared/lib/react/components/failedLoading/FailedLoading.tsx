import { Result, Button } from 'antd';
import clsx from 'clsx';
import styles from './style.module.css';

type FailedLoadingProps = {
  refetchAttemptsCount: number;
  onClick: () => void;
  className?: string;
}

export function FailedLoading({ className, refetchAttemptsCount, onClick }: FailedLoadingProps) {
  return (
    <Result
      className={clsx(styles.result, className)}
      status="error"
      title="Failed loading"
      subTitle={
        refetchAttemptsCount
          ? `Please press button to try loading games again or come back later. You have ${refetchAttemptsCount} attempts!`
          : 'You have no attempts! Please come back later.'
      }
      extra={
        <Button
          type="primary"
          onClick={onClick}
          disabled={!refetchAttemptsCount}
        >
          Try Again
        </Button>
      }
    >
    </Result>
  );
}
