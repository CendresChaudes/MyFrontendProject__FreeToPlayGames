import { Layout } from 'antd';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import styles from './styles.module.css';

const { Content } = Layout;

export function GamePage() {
  return (
    <Layout className={styles.layout}>
      <Header />

      <Content>
        Content
      </Content>

      <Footer />
    </Layout>
  );
}
