import { Layout } from 'antd';
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
    dispatch(fetchGames());
  }, []);

  return (
    <Layout className={styles.body}>
      <Header hasReturnButton={false} />

      <Content className={styles.main}>
        <SortFilterPanel />
        <GamesList />
      </Content>

      <Footer />
    </Layout>
  );
}
