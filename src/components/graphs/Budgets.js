import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';

const BudgetsContainer = styled.div`
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  border-bottom: 1px solid #e266b5;
  @media (max-width: 765px) {
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column-reverse;
  }
`;
const BudgetsInfo = styled.div`
  margin: 0 auto;
  width: 50%;
  @media (max-width: 765px) {
    text-align: center;
    margin: 0;
  }
`;

// const initialState ={

// };

const progress = 65;

function Budgets() {
  return (
    <BudgetsContainer>
      <BudgetsInfo>
        <h1>Here are your Budgets for this month</h1>
        <p>
          You saved this much in this category from your budgeting this month.
        </p>
      </BudgetsInfo>

      <BudgetsInfo>
        <ProgressBar
          now={progress}
          animated
          striped
          variant="success"
          label={`${progress}% Success`}
        />
        <ProgressBar
          now={progress}
          animated
          striped
          variant="info"
          label={`${progress}% Information`}
        />
        <ProgressBar
          now={progress}
          animated
          striped
          variant="warning"
          label={`${progress}% Warning`}
        />
        <ProgressBar
          now={progress}
          animated
          striped
          variant="danger"
          label={`${progress}% Danger`}
        />
      </BudgetsInfo>
    </BudgetsContainer>
  );
}
export default Budgets;
