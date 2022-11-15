import { render } from '@testing-library/react';
import Index from 'pages/index';

test('renders deploy links', () => {
  const { getByText } = render(<Index />);
  const helloWorldElement = getByText('Hello, world!');

  expect(helloWorldElement).toBeInTheDocument();
});
