import React from 'react';
import { render } from '@testing-library/react';
import Socials from '../Socials';

// Smoke Test
it('renders without breaking', () => {
  render(<Socials />);
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<Socials />);
  expect(asFragment()).toMatchSnapshot();
});
