import { ArrowLeftOutlined } from '@ant-design/icons';
import { Layout, Button, Divider, Row, Col } from 'antd';
import { useBreakpoint } from '@/shared/lib';
import { Logo } from '@/shared/ui';
import styles from './styles.module.css';

type HeaderProps = {
  hasReturnButton?: boolean;
};

const { Header: _Header } = Layout;

export function Header({ hasReturnButton = true }: HeaderProps) {
  const currentBreakpoint = useBreakpoint();

  return (
    <>
      <_Header className={styles.header}>
        <Row className={styles.row} align="middle">
          <Col xs={{ span: hasReturnButton ? 2 : 0 }} sm={{ span: 8 }}>
            {hasReturnButton && (
              <Button
                type="primary"
                icon={<ArrowLeftOutlined />}
                aria-label="Return"
              >
                {currentBreakpoint !== 'xs' && 'Return'}
              </Button>
            )}
          </Col>

          <Col xs={{ span: hasReturnButton ? 22 : 24 }} sm={{ span: 8 }}>
            <Logo className={styles.logo} />
          </Col>
        </Row>
      </_Header>

      <Divider className={styles.divider} />
    </>
  );
}
