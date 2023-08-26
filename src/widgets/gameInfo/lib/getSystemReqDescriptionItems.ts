import { DescriptionsProps } from 'antd';

export const getSystemReqDescriptionItems = (currentGame: GameAdaptedType): DescriptionsProps['items'] => ([
  {
    key: '1',
    label: 'OS',
    children: currentGame.minimumSystemRequirements.os,
  },
  {
    key: '2',
    label: 'Processor',
    children: currentGame.minimumSystemRequirements.processor,
  },
  {
    key: '3',
    label: 'Memory',
    children: currentGame.minimumSystemRequirements.memory,
  },
  {
    key: '4',
    label: 'Graphics',
    children: currentGame.minimumSystemRequirements.graphics,
  },
  {
    key: '5',
    label: 'Storage',
    children: currentGame.minimumSystemRequirements.storage,
  },
]);
