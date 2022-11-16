import { render, screen } from '@testing-library/react';
import Index from 'pages/index';

test('renders index page', () => {
  render(<Index />);

  expect(screen.getByRole('heading')).toHaveTextContent('Hello, world!');
});
