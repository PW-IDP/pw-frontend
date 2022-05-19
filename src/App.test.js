import { render, screen } from '@testing-library/react';
import App from './App';

test('Test', () => {
  render(<App />);
  const someVar = 0
  expect(someVar).toEqual(0);
});
