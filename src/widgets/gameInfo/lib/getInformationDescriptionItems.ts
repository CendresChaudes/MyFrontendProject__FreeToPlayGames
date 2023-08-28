import { DescriptionsProps } from 'antd';
import { isDataItemEmpty } from '@/shared/lib';

export const getInformationDescriptionItems = (currentGame: GameAdaptedType): DescriptionsProps['items'] => ([
  {
    key: '1',
    label: 'Genre',
    children: isDataItemEmpty(currentGame.genre),
  },
  {
    key: '2',
    label: 'Developer',
    children: isDataItemEmpty(currentGame.developer),
  },
  {
    key: '3',
    label: 'Publisher',
    children: isDataItemEmpty(currentGame.publisher),
  },
  {
    key: '4',
    label: 'Release Date',
    children: isDataItemEmpty(currentGame.releaseDate),
  },
]);
