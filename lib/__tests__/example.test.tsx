import { render, screen } from '@testing-library/react';

import helloWorld from '@/index';

/**
 * The UI to test in this test file.
 */
// const UI = () => {
//   return <GlobalNav />;
// };

/**
 * Renders the UI and returns relevant elements or values for testing.
 * This reduces the need to manually query common elements in each test.
 */
// const setup = () => {
//   render(<UI />);

//   const menuButton = screen.getByRole('button');

//   return { menuButton };
// };

// describe('Home', () => {
//   it('renders menu button', () => {
//     const { menuButton } = setup();

//     expect(menuButton).toHaveAttribute('aria-haspopup', 'dialog');
//   });
// });

describe('Hello', () => {
  it('World', () => {
    expect(helloWorld).toBe('Hello, world!');
  });
});
