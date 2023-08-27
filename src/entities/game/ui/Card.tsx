import { Card as _Card, Typography, Descriptions } from 'antd';
import { Link, generatePath } from 'react-router-dom';
import { getCardDescriptionItems } from '../lib/getCardDescriptionItems';
import styles from './styles.module.css';
import { AppRoute } from '@/const';

const { Meta } = _Card;
const { Title } = Typography;

type CardProps = {
  game: GamesAdaptedType;
}

export function Card({ game }: CardProps) {
  const cardDescriptionItems = getCardDescriptionItems(game);

  return (
    <Link
      className={styles.link}
      to={generatePath(AppRoute.Game, { id: game.id.toString() })}
    >
      <_Card
        className={styles.card}
        cover={<img src={game.thumbnail} alt={game.title} />}
        hoverable
      >
        <Meta
          title={
            <Title className={styles.name}>
              {game.title}
            </Title>
          }
          description={
            <Descriptions
              className={styles.descriptions}
              items={cardDescriptionItems}
              column={1}
            />
          }
        />
      </_Card>
    </Link>
  );
}
