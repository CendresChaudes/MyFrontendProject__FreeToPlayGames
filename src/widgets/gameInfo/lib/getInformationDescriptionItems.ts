import { DescriptionsProps } from 'antd';

export const getInformationDescriptionItems = (currentGame: GameAdaptedType): DescriptionsProps['items'] => ([
  {
    key: '1',
    label: 'Genre',
    children: currentGame.genre,
  },
  {
    key: '2',
    label: 'Developer',
    children: currentGame.developer,
  },
  {
    key: '3',
    label: 'Publisher',
    children: currentGame.publisher,
  },
  {
    key: '4',
    label: 'Release Date',
    children: currentGame.releaseDate,
  },
]);
