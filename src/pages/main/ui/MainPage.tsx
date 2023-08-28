import { Layout } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { Footer } from '@/widgets/footer';
import { GamesList } from '@/widgets/gamesList';
import { Header } from '@/widgets/header';
import { SortFilterPanel } from '@/features/sortFilterPanel';
import { fetchGames } from '@/entities/game';
import { useAppDispatch } from '@/shared/lib';
import styles from './styles.module.css';

const { Content } = Layout;

export function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const source = axios.CancelToken.source();
    dispatch(fetchGames({ cancelToken: source.token }));

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <Layout className={styles.body}>
      <Header hasReturnButton={false} />

      <Content className={styles.main}>
        <h1 className="visually-hidden">Games list</h1>
        <SortFilterPanel />
        <GamesList />
      </Content>

      <Footer />
    </Layout>
  );
}
