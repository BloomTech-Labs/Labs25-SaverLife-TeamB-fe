import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotFoundPage } from '../components/pages/NotFound';

describe('Loading Common Component', () => {
  test('it should mount a button based on a link', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const link = getByText(/Back To Account/i);
    expect(link.textContent).toBe('Back To Account');
  });
  test('it should mount a button based on an a href', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>
    );
    const href = getByText(/SaverLife Home/i);
    expect(href.textContent).toBe('SaverLife Home');
  });
});
