import React from 'react';
import SavingsGraph from '../components/graphs/SavingsGraph';
import { render, getByText } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<SavingsGraph/> test suite', () => {
  test('it should render Savings Graph', () => {
    const { getByText, debug } = render(
      <Router>
        <SavingsGraph />
      </Router>
    );
    const element = getByText(/Savings/i);
    expect(element.textContent).toBe('This is your Savings Graph');
  });
});
