import { Layout } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { Footer } from '@/widgets/footer';
import { GamesList } from '@/widgets/gamesList';
import { Header } from '@/widgets/header';
import { SortFilterPanel } from '@/features/sortFilterPanel';
import {
  Genre,
  Platform,
  fetchGames,
  getCurrentGenreFilter,
  getCurrentPlatformFilter,
  getCurrentSortType,
} from '@/entities/game';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import styles from './styles.module.css';

const { Content } = Layout;

export function MainPage() {
  const dispatch = useAppDispatch();

  const currentPlatform = useAppSelector(getCurrentPlatformFilter);
  const currentGenre = useAppSelector(getCurrentGenreFilter);
  const currentSortType = useAppSelector(getCurrentSortType);

  useEffect(() => {
    const source = axios.CancelToken.source();

    dispatch(fetchGames({
      params: {
        platform: currentPlatform === Platform.All ? undefined : currentPlatform,
        category: currentGenre === Genre.All ? undefined : currentGenre,
        'sort-by': currentSortType,
      },
      cancelToken: source.token,
    })
    );

    return () => {
      source.cancel();
    };
  }, [currentPlatform, currentGenre, currentSortType]);

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
