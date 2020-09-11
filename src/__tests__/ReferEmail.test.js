import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReferEmail } from '../components/pages/Refer';

describe('Loading Common Component', () => {
  test('it should mount a div based on props for h1', () => {
    const { getByText } = render(
      <Router>
        <ReferEmail />
      </Router>
    );
    const h1 = getByText(/Refer a Friend!/i);
    expect(h1.textContent).toBe('Refer a Friend!');
  });
});
