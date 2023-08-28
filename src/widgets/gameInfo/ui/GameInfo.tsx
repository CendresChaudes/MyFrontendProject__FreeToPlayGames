import { Col, Row, Image, Typography, Descriptions, Carousel } from 'antd';
import { getCurrentGame, getCurrentGameStatusObj } from '@/entities/game';
import { useAppSelector } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { getInformationDescriptionItems } from '../lib/getInformationDescriptionItems';
import { getSystemReqDescriptionItems } from '../lib/getSystemReqDescriptionItems';
import { GameInfoRejected } from './GameInfoRejected';
import styles from './styles.module.css';

const { Title } = Typography;

type GameInfoProps = {
  id: number;
}

export function GameInfo({ id }: GameInfoProps) {
  const currentGame = useAppSelector(getCurrentGame);
  const currentGameStatus = useAppSelector(getCurrentGameStatusObj);

  if (currentGameStatus.isUncompleted) {
    return <Loader text="Loading game info..." fullPage={false} />;
  }

  if (currentGameStatus.isRejected || !currentGame) {
    return <GameInfoRejected id={id} />;
  }

  return (
    <Row
      className={styles.wrapper}
      justify="space-between"
      gutter={[50, 25]}
    >
      <Col
        xs={{ span: 24 }}
        lg={{ span: 12 }}
      >
        <Image
          className={styles.thumbnail}
          src={currentGame.thumbnail}
          width={'100%'}
        />

        {currentGame.screenshots && (
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
        )}
      </Col>

      <Col
        xs={{ span: 24 }}
        lg={{ span: 12 }}
      >
        <Title className={styles.name} level={1} mark>
          {currentGame.title}
        </Title>

        <Title className={styles['section-title']} level={2}>
          Information
        </Title>
        <Descriptions
          className={styles.descriptions}
          items={getInformationDescriptionItems(currentGame)}
          column={1}
        />

        <Title className={styles['section-title']} level={2}>
          Minimum System Requirements
        </Title>
        {currentGame.minimumSystemRequirements
          ? (
            <Descriptions
              className={styles.descriptions}
              items={getSystemReqDescriptionItems(currentGame)}
              column={1}
            />
          )
          : 'N/A'}
      </Col>
    </Row>
  );
}
