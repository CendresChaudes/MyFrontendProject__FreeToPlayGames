import { DescriptionsProps } from 'antd';
import { isDataItemEmpty } from '@/shared/lib';

export const getSystemReqDescriptionItems = (currentGame: GameAdaptedType): DescriptionsProps['items'] => ([
  {
    key: '1',
    label: 'OS',
    children: isDataItemEmpty(currentGame.minimumSystemRequirements.os),
  },
  {
    key: '2',
    label: 'Processor',
    children: isDataItemEmpty(currentGame.minimumSystemRequirements.processor),
  },
  {
    key: '3',
    label: 'Memory',
    children: isDataItemEmpty(currentGame.minimumSystemRequirements.memory),
  },
  {
    key: '4',
    label: 'Graphics',
    children: isDataItemEmpty(currentGame.minimumSystemRequirements.graphics),
  },
  {
    key: '5',
    label: 'Storage',
    children: isDataItemEmpty(currentGame.minimumSystemRequirements.storage),
  },
]);
