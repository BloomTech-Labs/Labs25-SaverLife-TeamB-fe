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
    border-bottom: 0;
  }
`;
const BudgetsInfo = styled.div`
  margin: 0 auto;
  width: 50%;
  @media (max-width: 765px) {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;

// const initialState ={

// };

const category1 = 'Food';
const currentSpending1 = 562;
const maxSpending1 = 1000;

const category2 = 'Entertainment';
const currentSpending2 = 270;
const maxSpending2 = 788;

const category3 = 'Utilities';
const currentSpending3 = 455;
const maxSpending3 = 566;

const category4 = 'Medical';
const currentSpending4 = 100;
const maxSpending4 = 420;

function Budgets() {
  const checkProgressColor = percentage => {
    if (percentage < 50) {
      return 'success';
    } else if (percentage > 80) {
      return 'danger';
    } else {
      return 'warning';
    }
  };

  return (
    <BudgetsContainer>
      <BudgetsInfo>
        <h1>Here are your Budgets for this month</h1>
        <p>
          You saved this much in this category from your budgeting this month.
        </p>
      </BudgetsInfo>

      <BudgetsInfo>
        <h6>{category1}</h6>
        <ProgressBar
          now={(currentSpending1 / maxSpending1) * 100}
          animated
          striped
          variant={checkProgressColor((currentSpending1 / maxSpending1) * 100)}
          label={`$${currentSpending1}`}
        />
        <p>${maxSpending1}</p>

        <h6>{category2}</h6>
        <ProgressBar
          now={(currentSpending2 / maxSpending2) * 100}
          animated
          striped
          variant={checkProgressColor((currentSpending2 / maxSpending2) * 100)}
          label={`$${currentSpending2}`}
        />
        <p>${maxSpending2}</p>

        <h6>{category3}</h6>
        <ProgressBar
          now={(currentSpending3 / maxSpending3) * 100}
          animated
          striped
          variant={checkProgressColor((currentSpending3 / maxSpending3) * 100)}
          label={`$${currentSpending3}`}
        />
        <p>${maxSpending3}</p>

        <h6>{category4}</h6>
        <ProgressBar
          now={(currentSpending4 / maxSpending4) * 100}
          animated
          striped
          variant={checkProgressColor((currentSpending4 / maxSpending4) * 100)}
          label={`$${currentSpending4}`}
        />
        <p>${maxSpending4}</p>
      </BudgetsInfo>
    </BudgetsContainer>
  );
}
export default Budgets;
