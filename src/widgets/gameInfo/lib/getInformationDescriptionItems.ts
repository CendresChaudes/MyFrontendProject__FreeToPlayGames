import { DescriptionsProps } from 'antd';

export const getInformationDescriptionItems = (currentGame: GameAdaptedType): DescriptionsProps['items'] => ([
  {
    key: '1',
    label: 'Genre',
    children: currentGame.genre ?? 'N/A',
  },
  {
    key: '2',
    label: 'Developer',
    children: currentGame.developer ?? 'N/A',
  },
  {
    key: '3',
    label: 'Publisher',
    children: currentGame.publisher ?? 'N/A',
  },
  {
    key: '4',
    label: 'Release Date',
    children: currentGame.releaseDate ?? 'N/A',
  },
]);
