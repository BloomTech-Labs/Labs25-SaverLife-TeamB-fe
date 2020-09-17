import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { BudgetsContainer, BudgetsInfo } from './styles/GraphStyles';
import { getFutureBudget } from '../../api';

const initialState = {
  data: {},
};

function Budgets(props) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    function fetchDSData() {
      getFutureBudget(props.url, props.authState, props.userInfo)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
          console.log(err);
        });
    }
    fetchDSData();
  }, [props.url, props.authState, props.userInfo]);

  const checkProgressColor = percentage => {
    if (percentage < 50) {
      return 'success';
    } else if (percentage > 80) {
      return 'danger';
    } else {
      return 'warning';
    }
  };
  console.log('budget data', data);
  return (
    <BudgetsContainer>
      <BudgetsInfo>
        <h1>Monthly Budgets</h1>
        <p>
          Here are your Budgets for this month. You saved this much in this
          category from your budgeting this month.
        </p>
      </BudgetsInfo>

      <BudgetsInfo>
        {/* key represents spending categories */}
        {Object.keys(data).map(key => {
          console.log(key);
          return (
            <>
              <h6>{key}</h6>
              <ProgressBar
                label={`${data[key].currSpending}`}
                now={(data[key].currSpending / data[key].maxSpending) * 100}
                animated
                striped
                variant={checkProgressColor(
                  (data[key].currSpending / data[key].maxSpending) * 100
                )}
              />
              <p>Spending Limit: ${data[key].maxSpending}</p>
            </>
          );
        })}
      </BudgetsInfo>
    </BudgetsContainer>
  );
}

export default Budgets;
