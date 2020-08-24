import React from 'react';
import Plot from 'react-plotly.js';
import styled from 'styled-components';

const BudgetsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  border-bottom: 1px solid #e266b5;
`;
const BudgetsInfo = styled.div`
  margin: 0 auto;
`;

function Budgets() {
  return (
    <BudgetsContainer>
      <BudgetsInfo>
        <Plot
          data={[
            {
              mode: 'markers',
              x: [1, 2, 3, 4],
              y: [10, 11, 12, 13],
              text: [
                'Savings Progress<br>size: 40',
                'Savings Improved<br>size: 60',
                'Savings Really Improved<br>size: 80',
                'Met Savings Goal<br>size: 100',
              ],
              marker: {
                color: [
                  'rgb(93, 164, 214)',
                  'rgb(255, 144, 14)',
                  'rgb(44, 160, 101)',
                  'rgb(255, 65, 54)',
                ],
                size: [40, 60, 80, 100],
              },
            },
          ]}
          layout={{
            title: 'Bubble Chart Hover Text',
            showlegend: false,
            height: 600,
            width: 600,
          }}
        />
      </BudgetsInfo>

      <BudgetsInfo>
        <h1>Your Savings this Month</h1>
        <p>You saved this much in this category this month.</p>
      </BudgetsInfo>
    </BudgetsContainer>
  );
}

export default Budgets;
