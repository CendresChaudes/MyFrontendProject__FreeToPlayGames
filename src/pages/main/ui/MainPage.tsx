import { Layout } from 'antd';
import { useEffect } from 'react';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { fetchGames } from '@/entities/game';
import { useAppDispatch } from '@/shared/lib';
import styles from './styles.module.css';

const { Content, Sider } = Layout;

export function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  return (
    <Layout className={styles.body}>
      <Header hasReturnButton={false} />

      <Layout className={styles.main}>
        <Sider className={styles.sider}>
          Sider
        </Sider>

        <Content>
          Content
        </Content>
      </Layout>

      <Footer />
    </Layout>
  );
}
