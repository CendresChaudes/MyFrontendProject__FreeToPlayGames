import { createMockCurrentGameData } from '@/entities/game/tests-index';
import { getSystemReqDescriptionItems } from './getSystemReqDescriptionItems';

jest.mock('@/shared/lib', () => ({
  isDataItemEmpty: <T>(item: T) => (!item || item === '?') ? 'N/A' : item
}));

describe('Function: getSystemReqDescriptionItems', () => {
  test('Should return an array of description items', () => {
    const mockCurrentGameData = createMockCurrentGameData();

    const expectedResult = [
      {
        key: '1',
        label: 'OS',
        children: mockCurrentGameData.minimumSystemRequirements.os,
      },
      {
        key: '2',
        label: 'Processor',
        children: mockCurrentGameData.minimumSystemRequirements.processor,
      },
      {
        key: '3',
        label: 'Memory',
        children: mockCurrentGameData.minimumSystemRequirements.memory,
      },
      {
        key: '4',
        label: 'Graphics',
        children: mockCurrentGameData.minimumSystemRequirements.graphics,
      },
      {
        key: '5',
        label: 'Storage',
        children: mockCurrentGameData.minimumSystemRequirements.storage,
      },
    ];


    const result = getSystemReqDescriptionItems(mockCurrentGameData);

    expect(result).toEqual(expectedResult);
  });
});


