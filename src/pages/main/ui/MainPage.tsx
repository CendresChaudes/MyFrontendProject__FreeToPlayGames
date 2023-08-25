import { Layout } from 'antd';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import styles from './styles.module.css';

const { Content, Sider } = Layout;

export function MainPage() {
  return (
    <Layout className={styles.layout}>
      <Header hasReturnButton={false} />

      <Layout className={styles.layout}>
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
