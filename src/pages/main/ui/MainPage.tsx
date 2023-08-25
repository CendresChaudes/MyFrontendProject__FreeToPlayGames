import { Layout } from 'antd';
import styles from './styles.module.css';

const { Header, Content, Sider } = Layout;

export function MainPage() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        Header
      </Header>

      <Layout className={styles.layout}>
        <Sider className={styles.sider}>
          Sider
        </Sider>

        <Content>
          Content
        </Content>
      </Layout>
    </Layout>
  );
}
