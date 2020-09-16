import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { BudgetsContainer, BudgetsInfo } from '../../graphs/styles/GraphStyles';
import Nav from '../Nav/Nav';

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

function Budgets(props) {
  const { userInfo, authService } = props;
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
    <>
      <Nav authService={authService} />
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
            variant={checkProgressColor(
              (currentSpending1 / maxSpending1) * 100
            )}
            label={`$${currentSpending1}`}
          />
          <p>${maxSpending1}</p>

          <h6>{category2}</h6>
          <ProgressBar
            now={(currentSpending2 / maxSpending2) * 100}
            animated
            striped
            variant={checkProgressColor(
              (currentSpending2 / maxSpending2) * 100
            )}
            label={`$${currentSpending2}`}
          />
          <p>${maxSpending2}</p>

          <h6>{category3}</h6>
          <ProgressBar
            now={(currentSpending3 / maxSpending3) * 100}
            animated
            striped
            variant={checkProgressColor(
              (currentSpending3 / maxSpending3) * 100
            )}
            label={`$${currentSpending3}`}
          />
          <p>${maxSpending3}</p>

          <h6>{category4}</h6>
          <ProgressBar
            now={(currentSpending4 / maxSpending4) * 100}
            animated
            striped
            variant={checkProgressColor(
              (currentSpending4 / maxSpending4) * 100
            )}
            label={`$${currentSpending4}`}
          />
          <p>${maxSpending4}</p>
        </BudgetsInfo>
      </BudgetsContainer>
    </>
  );
}
export default Budgets;
