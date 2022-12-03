import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import Homepage from 'app/page';

test('renders home page', () => {
  render(<Homepage />);

  expect(screen.getByRole('heading')).toHaveTextContent('Hello, world!');
});
