import { DescriptionsProps } from 'antd';
import { isDataItemEmpty } from '@/shared/lib';

export const getCardDescriptionItems = (currentGame: GamesAdaptedType): DescriptionsProps['items'] => ([
  {
    key: '1',
    label: 'Genre',
    children: isDataItemEmpty(currentGame.genre),
  },
  {
    key: '2',
    label: 'Publisher',
    children: isDataItemEmpty(currentGame.publisher),
  },
  {
    key: '3',
    label: 'Release Date',
    children: isDataItemEmpty(currentGame.releaseDate),
  },
]);
