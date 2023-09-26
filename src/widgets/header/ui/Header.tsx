import { ArrowLeftOutlined } from '@ant-design/icons';
import { Layout, Button, Row, Col } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useBreakpoint } from '@/shared/lib';
import { Logo } from '@/shared/ui';
import styles from './styles.module.css';
import { AppRoute } from '@/const';

type HeaderProps = {
  hasReturnButton?: boolean;
};

const { Header: _Header } = Layout;

export function Header({ hasReturnButton = true }: HeaderProps) {
  const currentBreakpoint = useBreakpoint();
  const navigate = useNavigate();

  return (
    <_Header className={styles.header}>
      <Row className={styles.row} align="middle">
        <Col span={8}>
          {hasReturnButton && (
            <Button
              type="primary"
              shape="round"
              size={(currentBreakpoint !== 'xs' && currentBreakpoint !== 'sm') ? 'large' : 'middle'}
              icon={<ArrowLeftOutlined />}
              aria-label="Return"
              onClick={() => navigate(AppRoute.Root)}
            >
              {currentBreakpoint !== 'xs' && 'Return'}
            </Button>
          )}
        </Col>

        <Col span={8}>
          <Link className={styles.link} to={AppRoute.Root}>
            <Logo className={styles.logo} />
          </Link>
        </Col>
      </Row>
    </_Header>
  );
}
