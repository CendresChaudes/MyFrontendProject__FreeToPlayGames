import { createAdaptedMockCurrentGame } from '@/entities/game/tests-index';
import { getSystemReqDescriptionItems } from './getSystemReqDescriptionItems';

jest.mock('@/shared/lib', () => ({
  isDataItemEmpty: <T>(item: T) => item
}));

describe('Function: getSystemReqDescriptionItems', () => {
  test('Should return an array of description items', () => {
    const mockCurrentGame = createAdaptedMockCurrentGame();

    const expectedResult = [
      {
        key: '1',
        label: 'OS',
        children: mockCurrentGame.minimumSystemRequirements.os,
      },
      {
        key: '2',
        label: 'Processor',
        children: mockCurrentGame.minimumSystemRequirements.processor,
      },
      {
        key: '3',
        label: 'Memory',
        children: mockCurrentGame.minimumSystemRequirements.memory,
      },
      {
        key: '4',
        label: 'Graphics',
        children: mockCurrentGame.minimumSystemRequirements.graphics,
      },
      {
        key: '5',
        label: 'Storage',
        children: mockCurrentGame.minimumSystemRequirements.storage,
      },
    ];


    const result = getSystemReqDescriptionItems(mockCurrentGame);

    expect(result).toEqual(expectedResult);
  });
});


