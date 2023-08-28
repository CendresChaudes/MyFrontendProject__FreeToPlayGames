import { Layout } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '@/widgets/footer';
import { GameInfo } from '@/widgets/gameInfo';
import { Header } from '@/widgets/header';
import { fetchCurrentGame } from '@/entities/game';
import { useAppDispatch } from '@/shared/lib';
import styles from './styles.module.css';

const { Content } = Layout;

export function GamePage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    const source = axios.CancelToken.source();
    dispatch(fetchCurrentGame({ cancelToken: source.token, id: Number(id) }));

    return () => {
      source.cancel();
    };
  }, [id]);

  return (
    <Layout className={styles.body}>
      <Header />

      <Content className={styles.main}>
        <GameInfo id={Number(id)} />
      </Content>

      <Footer />
    </Layout>
  );
}
