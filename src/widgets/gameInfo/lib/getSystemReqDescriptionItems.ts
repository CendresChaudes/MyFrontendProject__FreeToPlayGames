import { DescriptionsProps } from 'antd';

export const getSystemReqDescriptionItems = (currentGame: GameAdaptedType): DescriptionsProps['items'] => ([
  {
    key: '1',
    label: 'OS',
    children: currentGame.minimumSystemRequirements.os ?? 'N/A',
  },
  {
    key: '2',
    label: 'Processor',
    children: currentGame.minimumSystemRequirements.processor ?? 'N/A',
  },
  {
    key: '3',
    label: 'Memory',
    children: currentGame.minimumSystemRequirements.memory ?? 'N/A',
  },
  {
    key: '4',
    label: 'Graphics',
    children: currentGame.minimumSystemRequirements.graphics ?? 'N/A',
  },
  {
    key: '5',
    label: 'Storage',
    children: currentGame.minimumSystemRequirements.storage ?? 'N/A',
  },
]);
