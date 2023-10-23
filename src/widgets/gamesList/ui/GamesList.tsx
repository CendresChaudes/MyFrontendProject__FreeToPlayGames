import { Col, Pagination, Row } from 'antd';
import { useState } from 'react';
import {
  getGames,
  getGamesStatusObj,
  Card,
  getCurrentPageNumber,
  changeCurrentPageNumber,
} from '@/entities/game';
import { useBreakpoint, useAppSelector, useAppDispatch } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { GamesListRejected } from './GamesListRejected';
import styles from './styles.module.css';

export function GamesList() {
  const dispatch = useAppDispatch();
  const currentBreakpoint = useBreakpoint();

  const [pageSize, setPageSize] = useState(10);

  const games = useAppSelector(getGames);
  const gamesStatus = useAppSelector(getGamesStatusObj);
  const currentPageNumber = useAppSelector(getCurrentPageNumber);

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
          .slice(
            (currentPageNumber - 1) * pageSize,
            currentPageNumber * pageSize
          )
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
        showTotal={(total, range) =>
          currentBreakpoint !== 'xs'
            ? `${range[0]}-${range[1]} of ${total} items`
            : ''}
        current={currentPageNumber}
        pageSize={pageSize}
        showLessItems={currentBreakpoint === 'xs'}
        onChange={(page, size) => {
          dispatch(changeCurrentPageNumber(page));
          setPageSize(size);
          window.scrollTo(0, 0);
        }}
      />
    </>
  );
}
