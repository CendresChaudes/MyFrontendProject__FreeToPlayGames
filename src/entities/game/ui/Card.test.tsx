import { screen } from '@testing-library/react';
import { render } from '@/shared/tests';
import { createAdaptedMockGames } from '../tests/lib/createAdaptedMockGames';
import { Card } from './Card';

describe('React component: Card', () => {
  test('Should render correctly', () => {
    const cardLinkTestId = 'card-link';
    const mockGame = createAdaptedMockGames()[0];

    render(<Card game={mockGame} />);

    expect(screen.getByTestId(cardLinkTestId)).toBeInTheDocument();
  });
});
