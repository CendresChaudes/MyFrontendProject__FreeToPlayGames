import { Col, Row, Image, Typography, Descriptions, Carousel } from 'antd';
import { Navigate } from 'react-router-dom';
import { getCurrentGame, getCurrentGameStatusObj } from '@/entities/game';
import { useAppSelector } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { getInformationDescriptionItems } from '../lib/getInformationDescriptionItems';
import { getSystemReqDescriptionItems } from '../lib/getSystemReqDescriptionItems';
import styles from './styles.module.css';
import { AppRoute } from '@/const';

const { Title } = Typography;

export function GameInfo() {
  const currentGame = useAppSelector(getCurrentGame);
  const currentGameStatus = useAppSelector(getCurrentGameStatusObj);

  if (currentGameStatus.isUncompleted) {
    return <Loader text="Loading game info..." />;
  }

  if (!currentGame) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const informationDescriptionItems = getInformationDescriptionItems(currentGame);
  const systemReqDescriptionItems = getSystemReqDescriptionItems(currentGame);

  return (
    <Row className={styles.wrapper} justify="space-evenly">
      <Col
        xs={{ span: 22 }}
        sm={{ span: 21 }}
        lg={{ span: 10 }}
      >
        <Image
          className={styles.thumbnail}
          src={currentGame.thumbnail}
          width={'100%'}
        />

        <Carousel className={styles.carousel}>
          {currentGame.screenshots.map((screenshot) => (
            <div key={screenshot.id}>
              <Image
                className={styles.screenshot}
                src={screenshot.image}
                width={'100%'}
              />
            </div>
          ))}
        </Carousel>
      </Col>
      <Col
        xs={{ span: 22 }}
        sm={{ span: 21 }}
        lg={{ span: 9 }}
      >
        <Title
          className={styles.name}
          level={1}
          mark
        >
          {currentGame.title}
        </Title>
        <Title className={styles['section-title']} level={2}>
          Information
        </Title>
        <Descriptions
          className={styles.descriptions}
          items={informationDescriptionItems}
          column={1}
        />
        <Title className={styles['section-title']} level={2}>
          Minimum System Requirements
        </Title>
        <Descriptions
          className={styles.descriptions}
          items={systemReqDescriptionItems}
          column={1}
        />
      </Col>
    </Row>
  );
}
