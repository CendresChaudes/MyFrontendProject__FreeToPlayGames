import { ArrowLeftOutlined } from '@ant-design/icons';
import { Layout, Button, Typography, Divider, Row, Col } from 'antd';
import { Logo } from '@/shared/ui';
import styles from './styles.module.css';

type HeaderProps = {
  hasReturnButton?: boolean;
};

const { Header: _Header } = Layout;
const { Paragraph, Link } = Typography;

export function Header({ hasReturnButton = true }: HeaderProps) {
  return (
    <>
      <_Header className={styles.header}>
        <Row className={styles.row} align="middle">
          <Col xs={{ span: hasReturnButton ? 4 : 0 }} sm={{ span: 8 }}>
            {hasReturnButton && (
              <Button
                type="primary"
                icon={<ArrowLeftOutlined />}
                aria-label="Return"
              >
              </Button>
            )}
          </Col>

          <Col xs={{ span: hasReturnButton ? 20 : 24 }} sm={{ span: 8 }}>
            <Logo className={styles.logo} />
          </Col>

          <Col xs={{ span: 0 }} sm={{ span: 8 }}>
            <Paragraph className={styles.text}>
              Designed by{' '}
              <Link href="https://github.com/CendresChaudes" target="_blank">
                CendresChaudes
              </Link>
            </Paragraph>
          </Col>
        </Row>
      </_Header>

      <Divider className={styles.divider} />
    </>
  );
}
