import { Result, Button } from 'antd';
import clsx from 'clsx';
import styles from './style.module.css';

type FailedLoadingProps = {
  refetchAttempts: number;
  onClick: () => void;
  className?: string;
}

export function FailedLoading({ className, refetchAttempts, onClick }: FailedLoadingProps) {
  return (
    <Result
      className={clsx(styles.result, className)}
      status="error"
      title="Failed loading"
      subTitle={
        refetchAttempts
          ? `Please press button to try loading games again or come back later. You have ${refetchAttempts} attempts!`
          : 'You have no attempts! Please come back later.'
      }
      extra={
        <Button
          type="primary"
          onClick={onClick}
          disabled={!refetchAttempts}
        >
          Try Again
        </Button>
      }
    >
    </Result>
  );
}
