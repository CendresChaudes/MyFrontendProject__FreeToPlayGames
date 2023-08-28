import { Col, Pagination, Row } from 'antd';
import { useState } from 'react';
import { getGames, getGamesStatusObj } from '@/entities/game';
import { Card } from '@/entities/game';
import { useBreakpoint } from '@/shared/lib';
import { useAppSelector } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { GamesListRejected } from './GamesListRejected';
import styles from './styles.module.css';

export function GamesList() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const currentBreakpoint = useBreakpoint();
  const games = useAppSelector(getGames);
  const gamesStatus = useAppSelector(getGamesStatusObj);

  if (gamesStatus.isUncompleted) {
    return <Loader text="Loading games..." fullPage={false} />;
  }

  if (gamesStatus.isRejected) {
    return <GamesListRejected />;
  }

  return (
    <>
      <Row gutter={[25, 25]}>
        {games
          .slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
          .map((game) => (
            <Col
              key={String(game.id)}
              className={styles.col}
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              lg={{ span: 8 }}
              xxl={{ span: 6 }}
            >
              <Card game={game} />
            </Col>
          ))}
      </Row>

      <Pagination
        className={styles.pagination}
        total={games.length}
        showTotal={(total, range) => currentBreakpoint !== 'xs' ? `${range[0]}-${range[1]} of ${total} items` : ''}
        current={pageNumber}
        pageSize={pageSize}
        showLessItems={currentBreakpoint === 'xs'}
        onChange={(page, size) => {
          setPageNumber(page);
          setPageSize(size);
          window.scrollTo(0, 0);
        }}
      />
    </>
  );
}
