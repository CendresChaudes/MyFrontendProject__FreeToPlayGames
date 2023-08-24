import clsx from 'clsx';
import styles from './styles.module.css';

type LoaderProps = {
  text?: string;
  fullPage?: boolean;
}

export function Loader({ text = 'Loading...', fullPage = true }: LoaderProps) {
  return (
    <div className={clsx(styles.wrapper, { [styles['full-page']]: fullPage })}>
      <div className={styles.loader}></div>

      {text && (
        <p className={styles.description}>{text}</p>
      )}
    </div>
  );
}
