import { screen } from '@testing-library/react';
import { render } from '@/shared/tests';
import { createAdaptedMockGamesData } from '../tests/lib/createAdaptedMockGamesData';
import { Card } from './Card';

describe('React component: Card', () => {
  test('Should render correctly', () => {
    const cardLinkTestId = 'card-link';
    const mockGame = createAdaptedMockGamesData()[0];

    render(<Card game={mockGame} />);

    expect(screen.getByTestId(cardLinkTestId)).toBeInTheDocument();
  });
});
