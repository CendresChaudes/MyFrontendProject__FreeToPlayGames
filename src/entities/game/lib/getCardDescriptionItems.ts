import { DescriptionsProps } from 'antd';

export const getCardDescriptionItems = (currentGame: GamesAdaptedType): DescriptionsProps['items'] => ([
  {
    key: '1',
    label: 'Genre',
    children: currentGame.genre ?? 'N/A',
  },
  {
    key: '2',
    label: 'Publisher',
    children: currentGame.publisher ?? 'N/A',
  },
  {
    key: '3',
    label: 'Release Date',
    children: currentGame.releaseDate ?? 'N/A',
  },
]);
