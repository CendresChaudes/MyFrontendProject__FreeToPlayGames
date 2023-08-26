import { Col, Layout, Row } from 'antd';
import { useEffect } from 'react';
import { Footer } from '@/widgets/footer';
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

      <Content>
        <Row justify="center">
          <Col span={22}>
            <SortFilterPanel />
            Content
          </Col>
        </Row>
      </Content>

      <Footer />
    </Layout>
  );
}
