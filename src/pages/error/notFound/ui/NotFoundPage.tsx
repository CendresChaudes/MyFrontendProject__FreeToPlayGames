import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { AppRoute } from '@/const';

export function NotFoundPage() {
  return (
    <Result
      className={styles.result}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" shape="round">
          <Link to={AppRoute.Root}>Back Home</Link>
        </Button>
      }
    />
  );
}
