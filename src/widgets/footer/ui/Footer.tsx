import { Layout, Typography, Divider } from 'antd';
import styles from './styles.module.css';

const { Footer: _Footer } = Layout;
const { Paragraph, Link } = Typography;

export function Footer() {
  return (
    <>
      <Divider className={styles.divider}/>

      <_Footer className={styles.footer}>
        <Paragraph className={styles.text}>
        Designed by{' '}
          <Link href="https://github.com/CendresChaudes" target="_blank">
          CendresChaudes
          </Link>
        </Paragraph>
      </_Footer>
    </>
  );
}
