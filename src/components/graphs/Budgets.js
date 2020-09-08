import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { BudgetsContainer, BudgetsInfo } from './styles/GraphStyles';
import { getFutureBudget, getCurrentMonthSpending } from '../../api';

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

const initialState = {
  data: [],
  data2: [],
};

function Budgets(props) {
  const [data, setData] = useState(initialState.data);
  const [data2, setData2] = useState(initialState.data2);
  console.log({ budget_data: data });
  console.log({ current_spending: data2 });
  let categories = [];
  let maxSpending = [];
  let currentSpending = [];

  useEffect(() => {
    function fetchDSData() {
      getFutureBudget(props.url, props.authState)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
          console.log(err);
        });
      getCurrentMonthSpending(props.url2, props.authState)
        .then(res => {
          setData2(res);
        })
        .catch(err => {
          setData2({ data2: null, err });
          console.log(err);
        });
    }
    fetchDSData();
  }, [props.url, props.url2, props.authState]);

  const checkProgressColor = percentage => {
    if (percentage < 50) {
      return 'success';
    } else if (percentage > 80) {
      return 'danger';
    } else {
      return 'warning';
    }
  };

  if (data[0]) {
    console.log({ 'data[0]': data });
    for (let i = 0; i < data.length; i++) {
      categories.push(data[i][0]);
      maxSpending.push(data[i][1]);
    }
  }
  if (data2[0]) {
    console.log({ 'data[0]': data2 });
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (categories[i] == data2[j][0]) {
          currentSpending.push(data2[j][1]);
        }
      }
    }
  }

  return (
    <BudgetsContainer>
      <BudgetsInfo>
        <h1>Here are your Budgets for this month</h1>
        <p>
          You saved this much in this category from your budgeting this month.
        </p>
      </BudgetsInfo>

      <BudgetsInfo>
        <h6>{categories[0]}</h6>
        <ProgressBar
          now={(currentSpending[0] / maxSpending[0]) * 100}
          animated
          striped
          variant={checkProgressColor(
            (currentSpending[0] / maxSpending[0]) * 100
          )}
          label={`$${currentSpending[0]}`}
        />
        <p>Spending Limit: ${maxSpending[0]}</p>

        <h6>{categories[1]}</h6>
        <ProgressBar
          now={(currentSpending[1] / maxSpending[1]) * 100}
          animated
          striped
          variant={checkProgressColor(
            (currentSpending[1] / maxSpending[1]) * 100
          )}
          label={`$${currentSpending[1]}`}
        />
        <p>${maxSpending[1]}</p>

        <h6>{categories[2]}</h6>
        <ProgressBar
          now={(currentSpending[2] / maxSpending[2]) * 100}
          animated
          striped
          variant={checkProgressColor(
            (currentSpending[2] / maxSpending[2]) * 100
          )}
          label={`$${currentSpending[2]}`}
        />
        <p>${maxSpending[2]}</p>

        <h6>{categories[3]}</h6>
        <ProgressBar
          now={(currentSpending[3] / maxSpending[3]) * 100}
          animated
          striped
          variant={checkProgressColor(
            (currentSpending[3] / maxSpending[3]) * 100
          )}
          label={`$${currentSpending[3]}`}
        />
        <p>${maxSpending[3]}</p>
        <h6>{categories[4]}</h6>
        <ProgressBar
          now={(currentSpending[4] / maxSpending[4]) * 100}
          animated
          striped
          variant={checkProgressColor(
            (currentSpending[4] / maxSpending[4]) * 100
          )}
          label={`$${currentSpending[4]}`}
        />
        <p>${maxSpending[4]}</p>
        <h6>{categories[5]}</h6>
        <ProgressBar
          now={(currentSpending[5] / maxSpending[5]) * 100}
          animated
          striped
          variant={checkProgressColor(
            (currentSpending[5] / maxSpending[5]) * 100
          )}
          label={`$${currentSpending[5]}`}
        />
        <p>${maxSpending[5]}</p>
      </BudgetsInfo>
    </BudgetsContainer>
  );
}

export default Budgets;
